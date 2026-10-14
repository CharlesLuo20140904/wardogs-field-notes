export const deadlockGuides = [
  {
    gameId: "deadlock", id: "date-your-build", title: "Date every build you share", readTime: "04 min", sourceKey: "deadlock-status",
    deck: "Deadlock is officially marked as early development, so a useful build starts with a version and a purpose.",
    intro: "Valve's Steam Community hub calls Deadlock a multiplayer game in early development. That makes unlabelled hero, item and objective advice unusually easy to outdate.",
    sections: [["Write the version first", "Put the client date or patch identifier at the top of your notes. A reader can tell whether an unfamiliar item name, hero interaction or objective rule is stale instead of assuming it is a mistake."], ["Describe the job, not a permanent recipe", "Use a purpose such as lane stability, objective pressure, ally protection or late-fight damage. Explain why a choice serves that purpose, then let the current client decide the exact numbers."], ["Retest after an official update", "Valve publishes current official updates through the Steam hub. After an update, revisit the one interaction that justified your choice; do not silently carry an old conclusion into a new patch."]],
    takeaways: ["Put a date on every build.", "Explain the job before the shopping list.", "Recheck after official updates."],
  },
  {
    gameId: "deadlock", id: "call-lanes-and-districts", title: "Call lanes and districts clearly", readTime: "04 min", sourceKey: "deadlock-map",
    deck: "Use the official map vocabulary before inventing your own team shorthand.",
    intro: "Deadlock's City Never Sleeps material provides callouts for lanes and districts. A shared vocabulary makes a rotation or retreat actionable without relying on remembered nicknames.",
    sections: [["Open the official callouts", "Before a session, review the current lane and district labels together. Use those names in calls so a new teammate can verify the location instead of decoding a private shorthand."], ["Add an intention", "A useful call has a location plus a reason: rotate, defend, regroup, pressure or leave. The location tells teammates where; the verb tells them what the information changes."], ["Check the handoff after the match", "Pick one call that created confusion and replace it with a specific official label. Keep the revision small so the whole group actually adopts it next match."]],
    takeaways: ["Use current official place names.", "Pair every location with an action.", "Fix one unclear call at a time."],
  },
  {
    gameId: "deadlock", id: "review-an-early-build", title: "Review an early-development match", readTime: "05 min", sourceKey: "deadlock-status",
    deck: "Separate a repeatable decision from a one-patch result while the game is still changing.",
    intro: "This review format is designed for a game that Valve explicitly labels early development. It avoids presenting one win, one loss or one community build as a permanent rule.",
    sections: [["Capture the state you saw", "Write the hero, map area, objective context and client date. These are the minimum facts someone else needs before they can reproduce or question your conclusion."], ["Name a decision you controlled", "Choose one purchase timing, rotation, target priority or call. Do not describe a result alone; say what was known when the choice was made."], ["Set one current-client test", "Turn the review into a single next-match question and retest it after a substantial official update. If it changes, keep the old note dated rather than rewriting history."]],
    takeaways: ["Record context, not only the score.", "Review a controllable choice.", "Keep earlier conclusions dated."],
  },
];
