import {createHash} from "node:crypto";
import type {CanonicalIR,CompilationResult,Diagnostic,ExecutionPlan,SourceModel} from "./types";

export function inspect(input:unknown):SourceModel{
 const observations:SourceModel["observations"]=[];
 const walk=(v:unknown,p:string,d=0):void=>{
  if(d>32)return;
  if(Array.isArray(v)){observations.push({path:p,type:"array"});v.forEach((x,i)=>walk(x,p+"["+i+"]",d+1));return}
  if(v!==null&&typeof v==="object"){observations.push({path:p,type:"object"});for(const [k,x] of Object.entries(v as Record<string,unknown>))walk(x,p+"."+k,d+1);return}
  observations.push({path:p,type:v===null?"null":typeof v,value:v});
 };
 walk(input,"$"); return {raw:input,observations};
}
const hash=(v:unknown)=>createHash("sha256").update(JSON.stringify(v)).digest("hex");

export function mapToIR(source:SourceModel):{ir:CanonicalIR;diagnostics:Diagnostic[]}{
 const raw=(source.raw&&typeof source.raw==="object"?source.raw:{}) as Record<string,unknown>;
 const content=(raw.content&&typeof raw.content==="object"?raw.content:{}) as Record<string,unknown>;
 const composition=(raw.composition&&typeof raw.composition==="object"?raw.composition:{}) as Record<string,unknown>;
 const goal=typeof raw.prompt==="string"?raw.prompt:typeof raw.intent==="string"?raw.intent:typeof content.goal==="string"?content.goal:"Unspecified production intent";
 const rawScenes=Array.isArray(composition.scenes)?composition.scenes:Array.isArray(raw.scenes)?raw.scenes:[];
 const diagnostics:Diagnostic[]=[];
 let cursor=0;
 const scenes=rawScenes.map((s,i)=>{
  const o=s&&typeof s==="object"?s as Record<string,unknown>:{};
  const duration=typeof o.duration==="number"?o.duration:1;
  if(typeof o.duration!=="number")diagnostics.push({code:"AMBIGUOUS_MAPPING",severity:"warning",message:"Scene duration not explicitly mapped; defaulted to 1 second.",path:"scenes["+i+"].duration"});
  const start=cursor; cursor+=duration;
  return {scene_id:"scene-"+(i+1),segments:[{segment_id:"segment-"+(i+1)+"-1",start,duration,extensions:{source:o}}]};
 });
 const ir:CanonicalIR={ir_version:"1.0",document_id:"evo-"+hash(raw).slice(0,16),intent:{goal},composition:{scenes},constraints:[],capabilities:[],provenance:[{source:"$",method:"reference-semantic-mapper",confidence:scenes.length?0.8:0.4}],extensions:{source_input:raw}};
 return {ir,diagnostics};
}
export function validateIR(ir:CanonicalIR):Diagnostic[]{
 const d:Diagnostic[]=[];
 if(ir.ir_version!=="1.0")d.push({code:"INVALID_IR",severity:"error",message:"Unsupported IR version."});
 if(!ir.document_id)d.push({code:"INVALID_IR",severity:"error",message:"document_id is required."});
 if(!ir.intent?.goal)d.push({code:"INVALID_IR",severity:"error",message:"intent.goal is required."});
 ir.composition.scenes.forEach((s,si)=>s.segments.forEach((g,gi)=>{if(g.start<0||g.duration<=0)d.push({code:"INVALID_IR",severity:"error",message:"Invalid segment timing.",path:"composition.scenes["+si+"].segments["+gi+"]"})}));
 return d;
}
export function plan(ir:CanonicalIR):{plan?:ExecutionPlan;diagnostics:Diagnostic[]}{const diagnostics=validateIR(ir);if(diagnostics.some(x=>x.severity==="error"))return{diagnostics};return{plan:{plan_version:"1.0",plan_id:"plan-"+ir.document_id,ir,steps:ir.capabilities.map((c,i)=>({id:"step-"+(i+1),capability:c.id,parameters:c.parameters}))},diagnostics}}
export function compile(input:unknown):CompilationResult{const source=inspect(input);const mapped=mapToIR(source);const validation=validateIR(mapped.ir);const diagnostics=[...mapped.diagnostics,...validation];if(diagnostics.some(x=>x.severity==="error"))return{status:"failure",ir:mapped.ir,diagnostics};const p=plan(mapped.ir);return{status:p.diagnostics.some(x=>x.severity==="error")?"failure":"success",ir:mapped.ir,plan:p.plan,diagnostics:[...diagnostics,...p.diagnostics]}}
