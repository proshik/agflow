# Backend and web applicability

Read this for changed service/API/auth/data/web behavior, not every CLI or desktop
change. Identify real endpoints, consumers and compatibility expectations. Cover
success, validation/auth failures, retry/idempotency or concurrency where the
accepted scenario needs them; inspect the real error contract and diagnostics.

For a service, use applicable 12-factor practices: environment-supplied config,
explicit backing services, reproducible builds/run separation and graceful
process lifecycle. Preserve existing configuration/provider choices; absent
credentials are an acceptance gap, not permission to fetch additional secrets.
Distinguish metrics by the question they answer: business metrics assess product
outcomes (for example, successful sign-ins versus attempted sign-ins); technical
metrics assess service health (latency, error rate or resource saturation). Name
the relevant product/operational question and use existing observability for its
needed evidence, with no tokens/private data in diagnostics. Do not impose service
telemetry on unrelated desktop/CLI edits or add a deployment/monitoring framework.

Assess schema/migration ordering and existing data invariants before changes.
Use owned disposable fixtures; protect user objects, authentication boundaries,
redirect validation and session/cookie handling. A migration or shared interface
couples tasks even when files differ. Record prerequisite revisions and the
resource owner; release only after actual consumers stop.

For web changes, use the established design system and observe the working page
at the relevant viewport, keyboard/focus and loading/error states. Regression
coverage and actual API/browser observations complement each other. Record
versions and exact code; mocked API output or a generated screenshot is not live
acceptance. Use existing test/browser tools when available; name missing surfaces
and remaining checks rather than treating static tests as PASS for them.
