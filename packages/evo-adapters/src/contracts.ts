import type {ExecutionPlan,SourceModel,Diagnostic} from "../../evo-core/src/types.js";
export interface InputAdapter {inspect(input:unknown):{source:SourceModel;diagnostics:Diagnostic[]}}
export interface ProviderCompiler {compile(plan:ExecutionPlan):{manifest:unknown;diagnostics:Diagnostic[]}}
export interface ProviderRuntimeAdapter {submit(manifest:unknown,idempotencyKey:string):Promise<{jobId:string}>;status(jobId:string):Promise<unknown>;cancel?(jobId:string):Promise<void>}