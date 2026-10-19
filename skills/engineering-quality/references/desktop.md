# Desktop applicability

Read the project's native UI/design/trap guidance before changing focus, input,
popups, rendering or process ownership. Preserve established components/tokens
and platform boundaries; use the existing text input implementation rather than
a label with a synthetic caret. Do not patch a dependency or redesign to bypass
a host capability gap.

Check the real gesture where relevant: press/move/release, keyboard equivalent,
focus restoration, scrolling, resize, empty/error state and neighboring input.
Use an isolated dev window and explicit actual process/window identity, not the
person's working app. Verify current accessibility/capture/event permissions;
a synthetic event being sent is not proof it reached the intended window.

Keep blocking IO off the UI thread and identify process/task/subscription owners
on cancellation and shutdown. Live observation requires the changed build to be
running; record its revision/build identity and state isolation. Missing capture
or interaction rights leave the affected case UNVERIFIED with a human check and
next step. No implied installation, screen-permission change or resource cleanup.
