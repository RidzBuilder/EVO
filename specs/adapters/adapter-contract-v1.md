# EVO Adapter Contract v1

InputAdapter:
accept external input → SourceModel + diagnostics.

ProviderCompiler:
accept validated ExecutionPlan → provider manifest + provider diagnostics.

ProviderRuntimeAdapter:
accept provider execution request → job reference/status/output.

Adapters must be deterministic where the provider contract is deterministic, preserve provenance, normalize provider errors, and never mutate Canonical IR.

Provider credentials and transport details are adapter-local.