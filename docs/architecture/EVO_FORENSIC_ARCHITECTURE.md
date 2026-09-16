# EVO Forensic Architecture — v1.0

STATUS: LOCKED

DEFINE
The initial blueprint separated TypeScript orchestration, Python AI/media analysis, and cloud rendering. Durable intent: separation of concerns, asynchronous orchestration, structured data, media analysis, and provider abstraction.

FORMALIZE
Promoted primitives: heterogeneous input; inspection; semantic interpretation; canonical IR; validation; capability resolution; constraint resolution; execution planning; provider adapters; runtime/job state; provenance; diagnostics.

Implementation details, not primitives: Node.js, TypeScript, Python, FastAPI, LangChain, CrewAI, Librosa, OpenCV, CLIP, Shotstack, Bannerbear, S3/GCS, Next.js, React Native.

Canonical pipeline:
Input Adapter → Source Model → Semantic Mapper → Canonical IR → Validator → Capability/Constraint Resolver → Execution Planner → Provider Compiler/Adapter → Runtime.

CROSS-CHECK
The architecture preserves the useful boundaries of the initial blueprint while removing framework/provider coupling from the semantic core.

ADVERSARIAL TEST
Unknown JSON, provider changes, uncertain AI inference, compile-only operation, and missing capabilities must be handled without redefining the canonical model.

RESOLVE GAP
Semantic Mapping, provenance, diagnostics, capability registry, constraint resolution, and execution-plan boundaries are mandatory.

DOCUMENT
This artifact records the forensic transformation.

LOCK
EVO v1.0 is the baseline. Future changes require versioned architecture decisions.