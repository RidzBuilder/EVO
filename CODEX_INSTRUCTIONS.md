# EVO Codex Engineering Instructions

MISSION
Implement EVO as a semantic compiler, not a provider-specific video application.

MANDATORY PIPELINE
Input Adapter → Source Model → Semantic Mapper → Canonical IR → Validator → Capability/Constraint Resolver → Execution Planner → Provider Compiler/Adapter → Runtime.

RULES
1. Never make upstream JSON canonical.
2. Never make provider JSON canonical.
3. Never silently invent semantic facts.
4. Preserve provenance.
5. Compile and execute remain separate.
6. Core remains provider/framework agnostic.
7. Provider integrations live behind adapters.
8. Breaking ontology/IR changes require a versioned architecture decision.
9. Every feature requires tests and aligned documentation.
10. Unknown input follows a safe diagnostic/extension path.

IMPLEMENTATION ORDER
Ontology → IR → contracts → core compiler → validators → capability resolver → adapters → providers → runtime → E2E tests.

DONE CONDITION
Code, tests, contract/schema, diagnostics and documentation must agree.