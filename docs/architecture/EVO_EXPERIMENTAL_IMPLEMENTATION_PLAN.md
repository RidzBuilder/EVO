# EVO Experimental Implementation Plan — v1.0

STATUS: LOCKED

Gate A — semantic foundation
- ontology
- canonical IR
- schemas
- compiler contract

Gate B — core
- inspect
- semantic mapping
- validation
- provenance
- diagnostics

Gate C — resolution
- capability registry
- constraint resolver
- execution planner

Gate D — integration
- generic JSON adapter
- ACOS adapter
- CCH adapter
- TENTOR adapter
- provider compiler adapters

Gate E — runtime
- job state
- idempotency
- provider submission
- webhook/polling normalization

Gate F — conformance
- arbitrary JSON
- ACOS JSON
- CCH JSON
- TENTOR JSON
- media references
- conflicting constraints
- missing capabilities
- provider failures
- repeated execution

A gate cannot be marked passed until its tests and documentation agree.