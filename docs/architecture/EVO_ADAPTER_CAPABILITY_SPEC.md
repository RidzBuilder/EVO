# EVO Adapter + Capability Architecture — v1.0

STATUS: LOCKED

CAPABILITY
A capability is a semantic execution requirement such as image composition, video rendering, audio mixing, text overlay, beat synchronization, or media analysis. A capability is not a provider name.

RESOLUTION
Required capability + parameters + constraints → resolved implementation or diagnostic.

ADAPTER BOUNDARIES
Input adapters translate external representations into SourceModel.
Provider compilers translate validated ExecutionPlan semantics into provider-specific manifests.
Provider adapters handle authentication, transport, polling/webhooks, and provider errors.

RULE
No provider-specific field may become canonical merely because one provider supports it.

LOCK
Capability and adapter boundaries are production architecture.