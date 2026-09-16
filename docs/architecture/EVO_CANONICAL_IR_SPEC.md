# EVO Canonical IR Specification — v1.0

STATUS: LOCKED

Canonical IR is a normalized semantic document, never a copy of upstream JSON and never a provider manifest.

REQUIRED TOP-LEVEL FIELDS
ir_version, document_id, intent, composition, constraints, capabilities, provenance, extensions.

NORMALIZATION
- durations and timestamps use seconds
- preserve source identity and provenance
- preserve uncertain values rather than inventing facts
- unknown fields go to extensions/source metadata
- canonical IDs are compiler-generated
- execution results do not belong inside semantic IR

LIFECYCLE
SOURCE → MAPPED → NORMALIZED → VALIDATED → RESOLVED → PLANNED

COMPATIBILITY
Compatible additions increment minor version. Breaking semantic changes require a major version.

LOCK
Canonical IR v1.0 is the semantic interchange boundary.