# Artifact 4: Application Logic & State

## Selected System Capability

The selected system capability is the Safe Route Decision System for The Fellowship Companion.

This capability allows the user to choose a current location and a destination in Middle-earth. Based on this input, the system displays possible routes and communicates the risk level of each route.

## State

The capability depends on the following state:

- current location
- selected destination
- available route options
- selected route

The state changes when the user selects a location, selects a destination, or chooses one of the available routes.

## Why This Matters

At this stage of the journey, the Fellowship needs to make careful travel decisions. Choosing the wrong route can increase danger, delay the mission, or expose the group to enemies. The system supports decision-making by making route risks visible.

## Implementation

The static interface from Assignment 3 was extended with plain JavaScript.

The HTML is connected to `logic.js` using a script tag. The JavaScript listens to user input, updates explicit state variables, filters available routes, and updates the interface based on the current state.

The implementation uses no external libraries, no frameworks, no backend, and no persistence.

## Design Rationale

The logic supports the intent from Assignment 1 by helping the Fellowship make safer and more informed travel decisions.

The behavior reflects the flow and wireframe from Assignment 2: the user first chooses a location, then a destination, then receives route options and can select one.

The main constraint was that no new features, libraries, backend, or redesign should be added. Therefore, the implementation stays focused on the selected capability and only makes the existing interface functional.

## Not Implemented Yet

The system does not yet include real-time data, persistence, user accounts, map visuals, or backend logic. Route data is currently stored directly in the JavaScript file.
