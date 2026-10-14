export const slayTheSpire2Guides = [
  {
    gameId: "slay-the-spire-2", id: "early-access-run-note", type: "Run primer", readTime: "04 min",
    title: "Slay the Spire 2: start an Early Access run note", sourceKey: "spire-access",
    deck: "A patch-aware record format for a roguelike deckbuilder that is still adding and balancing cards, events and enemies.",
    version: "Early Access · 05 Mar 2026", checked: "14 Oct 2026",
    prerequisite: "Record the client build or date alongside the character and mode. Mega Crit says Early Access will continue to add and balance cards, events, environments and enemies.",
    caution: "A successful run is evidence of what happened under one build and route; it is not a timeless tier list.",
    sections: [
      ["Write the starting context", "Note the character, solo or co-op mode, client date and the first decision that changed the run. Mega Crit confirms both a new and returning cast and optional co-op, so a record without that context cannot be reliably reused."],
      ["State the problem before the card", "For each major draft or relic choice, write the immediate problem it answers: survival, output, consistency or a team interaction. This creates a testable decision note instead of a vague claim that an option is always good."],
      ["Keep the revision signal", "When a later patch changes an involved card, event, environment or enemy, mark the old note as historical and test the same decision question again. Preserve the older context instead of silently rewriting it."],
    ],
    outcome: "You leave a run with a reproducible decision record that can be revisited when Early Access balance moves.",
  },
  {
    gameId: "slay-the-spire-2", id: "deck-problem-check", type: "Deck decision guide", readTime: "05 min",
    title: "Slay the Spire 2: draft against a visible deck problem", sourceKey: "spire-facts",
    deck: "A decision framework for cards and relics that avoids pretending the current card pool has a permanent ranking.",
    version: "Official factsheet · Early Access", checked: "14 Oct 2026",
    prerequisite: "Look at the current deck and the next known challenge before you evaluate a card. This is editorial guidance built on the official deck-and-relic game structure.",
    caution: "No individual card values or interactions are claimed here; verify the live card text before following a community recommendation.",
    sections: [
      ["Name the missing job", "Mega Crit describes a roguelike deckbuilder where players create decks, encounter creatures and discover relics. Before adding a card, name the job the deck is failing to do rather than evaluating the card in isolation."],
      ["Price the added complexity", "Ask how often the card must be drawn, which existing cards it changes, and whether it makes later turns easier or harder to read. This is a decision question, not a declaration that skipping is always correct."],
      ["Reopen the question after a relic", "A relic can change which deck problem matters next. Re-read the current deck after a relic or event changes its conditions instead of carrying an earlier draft rule across a different state."],
    ],
    outcome: "The next draft is justified by a visible deck problem, and the record remains useful even when the card pool changes.",
  },
  {
    gameId: "slay-the-spire-2", id: "co-op-decision-brief", type: "Co-op guide", readTime: "05 min",
    title: "Slay the Spire 2 co-op: make one shared decision brief", sourceKey: "spire-access",
    deck: "Use the official four-player co-op feature to make multiplayer-specific choices observable and reviewable.",
    version: "Early Access co-op", checked: "14 Oct 2026",
    prerequisite: "Use this before a consequential card, relic or route decision. Mega Crit says co-op supports up to four players and includes multiplayer-specific cards and team synergies.",
    caution: "Team synergy claims must include the participating characters, card text and client date; memory is not enough evidence in Early Access.",
    sections: [
      ["Describe the shared threat", "First say whether the team is solving short-term survival, setting up a synergy or protecting one player's plan. A named problem prevents four players from arguing from four unstated goals."],
      ["Share the facts before the recommendation", "Have the player who can see the card, relic or enemy interaction read the relevant information before the group recommends an outcome. Teammates can then test the same premise instead of accepting an unexplained conclusion."],
      ["Assign one run recorder", "After a notable interaction, record the party, mode, client date and result. When a balance update arrives, the team can repeat or retire a specific note rather than remembering a story about an old run."],
    ],
    outcome: "The group makes a current-client choice with shared facts, and one player preserves the context needed to revisit it.",
  },
];
