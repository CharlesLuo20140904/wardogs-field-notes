export const deadlockGuides = [
  {
    gameId: "deadlock", id: "patch-note-build-check", type: "Patch workflow", readTime: "04 min",
    title: "Deadlock: turn a patch note into a build check", sourceKey: "deadlock-status",
    deck: "A short retest process for a game Valve still labels as early development.",
    version: "Official Steam news · Oct 2026", checked: "14 Oct 2026",
    prerequisite: "Use the current Steam announcement or in-client update notes. A patch summary is evidence of a change, not proof of a new best build.",
    caution: "Do not carry exact values, hero choices or item sequences across an update without retesting the interaction that mattered.",
    sections: [
      ["Locate the changed interaction", "The October 5 official update changes specific Rat King, Sinclair and other hero values. Start by identifying the one ability, item or objective timing that supports your existing plan instead of reacting to every line in the notes."],
      ["State the old job", "Write the purpose the build served: lane stability, objective pressure, protection or damage conversion. This prevents a numerical change from being mistaken for a reason to abandon a plan whose job is still needed."],
      ["Run one bounded retest", "Test one client-versioned question in a normal match or controlled practice context. Record the patch date, hero, objective state and result; a single result is a note for the next review, not a permanent guide."],
    ],
    outcome: "Your next build note should name the exact patch and the decision it changes, rather than presenting a patch-sensitive sequence as evergreen advice.",
  },
  {
    gameId: "deadlock", id: "city-update-callout-reset", type: "Map update guide", readTime: "04 min",
    title: "Deadlock: reset calls after a map update", sourceKey: "deadlock-map",
    deck: "Use the City Never Sleeps update as a reminder to re-establish shared landmarks and objective language.",
    version: "City Never Sleeps · 29 Sep 2026", checked: "14 Oct 2026",
    prerequisite: "Review the current map and HUD with the same group that uses the calls. Personal nicknames are not a shared vocabulary.",
    caution: "Do not publish static landmark directions without testing them in the live map after visual or layout updates.",
    sections: [
      ["Retire vague landmarks", "Valve describes City Never Sleeps as a massive visual update to the map and neutrals, plus HUD changes. Replace shorthand such as 'the old corner' with a current, visible landmark your team can independently identify."],
      ["Add the decision verb", "A useful call contains both a location and an intended action: regroup, pressure, defend, rotate or leave. The place alone tells teammates where to look, but not what it changes."],
      ["Review one failure after the match", "Pick one call that created a delayed or split response. Compare it to the current HUD or map and write a replacement phrase that a new teammate can verify without shared history."],
    ],
    outcome: "The outcome is a smaller, current vocabulary your team can execute, not a copied callout map that may already be obsolete.",
  },
  {
    gameId: "deadlock", id: "early-development-match-review", type: "Match review", readTime: "05 min",
    title: "Deadlock: review one controllable match decision", sourceKey: "deadlock-status",
    deck: "A review format that separates a current-client observation from a claim about the long-term meta.",
    version: "Early development · live client", checked: "14 Oct 2026",
    prerequisite: "Use a match where you can identify one decision you controlled. The score alone is not a replayable strategy explanation.",
    caution: "Valve describes Deadlock as early development, with core systems and potential modes still subject to change.",
    sections: [
      ["Capture the state", "Record the client date, hero, map area, current objective and the information available before the choice. Those details are the minimum needed for a teammate to understand the evidence."],
      ["Name the decision", "Choose one rotation, purchase timing, target priority or retreat call. Write what you selected and why that option seemed to support the current objective, not merely whether the match was won."],
      ["Set a retest trigger", "Use an official update that affects the relevant system as the trigger to revisit the note. Preserve the old result with its date; changing a conclusion later should not erase the earlier client context."],
    ],
    outcome: "A good review creates one current-client hypothesis to check again—not an unqualified 'best build' title.",
  },
];
