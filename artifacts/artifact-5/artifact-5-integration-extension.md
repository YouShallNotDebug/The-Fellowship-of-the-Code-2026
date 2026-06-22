# Artifact 5: Integration & Extension

## Selected System Capability

The selected capability is the Ration Tracker System. It supports the Fellowship in monitoring and managing their food supplies throughout the journey to Mordor.

We chose this capability because food is one of the Fellowship's most critical resources. The hobbits require regular meals, and limited supplies can directly affect the group's morale, health, and ability to continue the journey.

At this stage of the adventure, the Fellowship faces long travel distances, uncertain access to food sources, and the risk of becoming stranded in hostile environments. Therefore, having structured support for tracking rations is essential for survival and successful mission planning.

---

## Mermaid Flowchart

[Go to Mermaid Flowchart](./src/flowchart-system.mermaid.md)

---

## Wireframe

[Go to Wireframe](./src/wireframe-system.jpg)

---

## Implementation Files

[Go to Home](./src/home.html)

[Go to Rationstracker](./src/rationstracker.html)

[Go to rationstracker.js](./src/rationstracker.js)

[Go to Routeplanner](./src/routeplanner.html)

[Go to routeplanner.js](./src/routeplanner.js)

[Go to style.css](./src/style.css)

---

## Design Rationale

### How does the the integrated System still reflect our original intent and value?

The true purpose of this companion has always been to guide the Fellowship safely through the shadows of Middle-earth and ensure their survival.

- Preserving the Inventory: Just as the flowchart demands, when a weary traveler reopens the system, the ancient archives remember exactly how much food is left. The journey can continue without losing track of precious provisions.

- Echoes of Doom: The dark and perilous nature of Mordor lives on within the system's warnings. When food drops below a critical minimum or when a traveler tries to consume rations that do not exist, the system gives a warning, echoing the constant threat of the dark lands.

### How do the individual slices connect meaningfully?

The different paths of our companion app are bound together like the Fellowship itself, creating a unified journey clad in the deep forest green of Lothlórien leaves, ancient golden parchment hues, and noble serif lettering.

Bringing the Scrolls and Sketches to Life:
This integrated system bridges the gap between our ancient roadmap (the flowchart) and our visual sketches (the wireframe). The home screen acts as the initial camp — the safe haven where a user first "opens the system". The visual layout of the Rations Tracker and Route Planner follows the clean, boxed parchment design sketched out in the wireframe. The circular return arrows (←) connect directly back to the loops of our home screen: if a traveler cancels a command or finishes an update, the system safely guides them back to the main display, closing the magical circle of our application logic.

### Why does our chosen extension make sense?

A static number on a page only shows the present moment, but a true tracker must look into the future. Therefore, we added a scrying pool of consumption (a dynamic line chart).

- This extension allows the Fellowship to look at the history of their supplies and see a visual trend of how fast their food is vanishing.

- Seeing this consumption path can help them foresee an empty pantry long before they reach the barren wastes of Mordor, making it a vital addition for the survival of the quest.

### What did we intentionally not build?

To ensure the system remains swift, reliable, and unburdened by heavy external sorcery (keeping it pure, plain JavaScript), certain boundaries were drawn:

- No Elaborate Modal Magic: Instead of crafting complex, heavily animated pop-up windows, we relied on the standard, reliable alerts of the browser. This keeps the focus entirely on the core logic laid out in the flowchart.

- No Individual Inventories: The stock is kept as one great, shared pool for the entire company. We did not build separate bags for each individual fellow, treating the Fellowship's survival as a single, collective fate.

- No Split Inventories for Different Provisions: We intentionally chose not to break the food tracking down into separate categories like Elven bread, fresh apples, or salted meats. In the wild camps of Middle-earth, food is simply fuel for survival. Tracking every single item individually would create a cluttered interface, contradicting our clean wireframe. Treating the provisions as one great, collective pool of "Rations" keeps the tracking simple, direct, and focused entirely on the global survival of the company.
