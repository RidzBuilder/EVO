# EVO Codex Repository Configuration Specification — v1.0

STATUS: LOCKED

Codex must treat the repository documents and specs as authoritative architecture.

BOOTSTRAP ORDER
1. Read CODEX_INSTRUCTIONS.md.
2. Read forensic, ontology, IR, compiler, adapter/capability and governance specifications.
3. Implement core types without provider dependencies.
4. Implement validators and capability resolution.
5. Implement compiler planning.
6. Implement adapter contracts.
7. Add providers only behind adapters.
8. Add runtime only after compile/plan conformance passes.
9. Execute adversarial and E2E tests.

CHANGE CONTROL
If implementation appears to require changing a locked semantic rule, stop implementation at that boundary and create a decision record. Do not silently alter the contract.

EXPERIMENTAL MODE
Experimental provider implementations may be incomplete, but must be explicitly marked and cannot weaken core invariants.