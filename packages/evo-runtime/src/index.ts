export type JobStatus="queued"|"running"|"succeeded"|"failed"|"cancelled";
export interface ExecutionJob{jobId:string;status:JobStatus;idempotencyKey:string;provider?:string;output?:unknown;error?:unknown;createdAt:string;updatedAt:string}
export interface RuntimeExecutor{submit(plan:unknown,idempotencyKey:string):Promise<ExecutionJob>;get(jobId:string):Promise<ExecutionJob>}