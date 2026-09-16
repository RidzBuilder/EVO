# EVO Full Production Repository Architecture — v1.0

STATUS: LOCKED

repository layers:
- docs: architecture, decisions, governance
- specs: ontology, IR schemas, compiler and adapter contracts
- packages/evo-core: semantic types and compilation primitives
- packages/evo-validator: structural/semantic/constraint validation
- packages/evo-capability: capability registry and resolution
- packages/evo-adapters: input and provider adapter contracts
- packages/evo-compiler: execution planning and provider compilation
- packages/evo-runtime: job lifecycle and execution boundary
- examples: canonical and adversarial fixtures
- tests: conformance and end-to-end suites

Dependency rule:
core → validator/capability/compiler contracts → adapters/providers/runtime.
Provider implementations must never be imported by evo-core.

Production deployment may split these packages into services, but the semantic contracts remain identical.