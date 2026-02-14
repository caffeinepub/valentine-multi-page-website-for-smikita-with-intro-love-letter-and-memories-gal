# Specification

## Summary
**Goal:** Add a new third step to the Valentine in-app flow that shows a love-themed picture gallery, and update navigation to follow Intro → Love Letter → Love-Themed Pictures.

**Planned changes:**
- Add a new third page/step component under the existing Valentine steps that renders a 4-image love-themed gallery (teddy, flowers, chocolates, ring) using static assets.
- Update step navigation so Intro’s primary button goes to Love Letter, and Love Letter’s bottom button goes to the new third page.
- Add an end-of-flow button on the third page that returns the user to the Intro step, allowing the flow to be repeated.
- Remove/clean up any remaining references to the old Memories flow to avoid unused imports and ensure the running app only reflects the 3-step flow.

**User-visible outcome:** Users can go from Intro to Love Letter to a new Love-Themed Pictures page showing four romantic images, then tap a button to return to Intro and start the flow again.
