# EVO Ontology Specification — v1.0

STATUS: LOCKED

PURPOSE
Define EVO's stable semantic vocabulary independently of input formats and providers.

CORE ENTITIES
Document, Intent, Composition, Scene, Segment, Asset, Audio, Text, Transition, Effect, Timeline, Constraint, CapabilityRequirement, Metadata, Provenance, Diagnostic, ExecutionPlan, Output.

RELATIONS
Document contains Intent and Composition. Composition contains ordered Scenes. Scenes contain ordered Segments. Segments reference Assets, Audio, Text, Effects and Transitions. Timeline provides temporal semantics. Constraints and CapabilityRequirements govern compilation. Provenance and Diagnostics cross-cut all transformations.

INVARIANTS
1. Meaning is separated from representation.
2. Unknown source fields may be preserved as extensions.
3. Inference carries provenance and confidence.
4. Constraints cannot be silently discarded.
5. Capabilities are requirements, not providers.
6. Provider-specific details are outside canonical ontology.
7. Canonical IDs are stable within a compilation.

LOCK
This ontology is the semantic authority for EVO v1.0.