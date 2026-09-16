# EVO Validation, Provenance, Diagnostics & Governance — v1.0

STATUS: LOCKED

VALIDATION LAYERS
1. Structural validation
2. Semantic validation
3. Constraint validation
4. Capability validation
5. Execution-plan validation
6. Provider conformance validation

PROVENANCE
Every semantic mapping or inference records source, path when known, method, and optional confidence.

DIAGNOSTICS
Diagnostics are machine-readable and severity-based: info, warning, error. Errors block the relevant stage.

GOVERNANCE
Locked artifacts are immutable baselines. Changes require a versioned decision record describing reason, compatibility impact, affected contracts, migration and tests.

ADVERSARIAL POLICY
The test suite must include unknown JSON, malformed JSON, missing fields, conflicting constraints, unsupported capabilities, provider mismatch, duplicate execution, and provenance loss.

LOCK
This is the governance baseline for EVO v1.0.