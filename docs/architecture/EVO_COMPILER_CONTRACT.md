# EVO Compiler Contract — v1.0

STATUS: LOCKED

OPERATIONS
inspect(input) → SourceModel + diagnostics
map(sourceModel) → CanonicalIR + provenance + diagnostics
validate(ir) → ValidationReport
resolve(ir, context) → ResolutionReport
plan(ir, resolution) → ExecutionPlan
compile(input, context) → CompilationResult
execute(plan, runtime) → ExecutionResult

INVARIANTS
- compile never executes external providers
- execute accepts only a validated plan
- provider schemas are not canonical
- inference requires provenance
- constraints are preserved or explicitly rejected

FAILURE MODEL
Invalid input, ambiguous mapping, invalid IR, missing capability, unsupported constraint, provider failure, and runtime failure are distinct diagnostic classes.

SECURITY
Untrusted input is data. Inspection and mapping never execute URLs, scripts, templates, or provider parameters.

IDEMPOTENCY
Compilation uses a content-derived fingerprint. Execution uses an idempotency key.

LOCK
This is the production compiler boundary for EVO v1.0.