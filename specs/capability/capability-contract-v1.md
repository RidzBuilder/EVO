# EVO Capability Contract v1

A capability is an executable semantic requirement.

Shape:
id
version
required
parameters
constraints

Resolution:
requested capability + context → implementation binding OR typed diagnostic.

Capability IDs must be provider-neutral. Examples:
media.image
media.video
audio.mix
audio.beat-sync
text.overlay
composition.transition
analysis.media
analysis.audio

Provider names are bindings, never capability IDs.