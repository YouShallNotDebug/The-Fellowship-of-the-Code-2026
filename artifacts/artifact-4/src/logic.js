// Artifact 4: Application logic and state
// PLAIN JavaScript only - no libraries/frameworks

let state = {
    currentLocation: "",
    destination: "",
    selectedRoute: null,
    availableRoutes: []
};

const routes = [
    {
        from: "Rivendell",
        to: "Mordor",
        name: "Mines of Moria",
        risk: "High",
        type: "Fast route",
        description: "Fast, but dangerous. Orc activity has been reported."
    },
    {
        from: "Rivendell",
        to: "Mordor",
        name: "Gap of Rohan",
        risk: "Medium",
        type: "Balanced route",
        description: "Longer, but less exposed than the Mines of Moria."
    },
    {
        from: "The Shire",
        to: "Rivendell",
        name: "Road through Bree",
        risk: "Low",
        type: "Safe route",
        description: "A known road with manageable danger for the Fellowship."
    },
    {
        from: "Gondor",
        to: "Mordor",
        name: "Pass of Cirith Ungol",
        risk: "High",
        type: "Dangerous route",
        description: "Very close to Mordor and therefore extremely risky."
    },
    {
        from: "Rohan",
        to: "Gondor",
        name: "Road to Minas Tirith",
        risk: "Medium",
        type: "Strategic route",
        description: "Useful for reaching Gondor, but enemy movement is possible."
    }
];

const locationSelect = document.querySelector("#location");
const destinationSelect = document.querySelector("#destination");
const message = document.querySelector("#message");
const routeOptions = document.querySelector("#route-options");

function updateState() {
    state.currentLocation = locationSelect.value;
    state.destination = destinationSelect.value;
    state.selectedRoute = null;

    state.availableRoutes = routes.filter(function(route) {
        return route.from === state.currentLocation && route.to === state.destination;
    });

    updateUI();
}

function updateUI() {
    routeOptions.innerHTML = "";

    if (state.currentLocation === "" || state.destination === "") {
        message.textContent = "Choose your location and destination.";
        return;
    }

    if (state.currentLocation === state.destination) {
        message.textContent = "The Fellowship is already at this location. Choose a different destination.";
        return;
    }

    if (state.availableRoutes.length === 0) {
        message.textContent = "No known route is available for this journey yet.";
        return;
    }

    message.textContent = "Available routes found. Choose one route:";

    state.availableRoutes.forEach(function(route) {
        const routeButton = document.createElement("button");

        routeButton.textContent = route.name + " | " + route.type + " | Risk: " + route.risk;

        routeButton.addEventListener("click", function() {
            state.selectedRoute = route;
            showSelectedRoute();
        });

        routeOptions.appendChild(routeButton);
    });
}

function showSelectedRoute() {
    message.textContent =
        "Selected route: " +
        state.selectedRoute.name +
        ". " +
        state.selectedRoute.description;
}

locationSelect.addEventListener("change", updateState);
destinationSelect.addEventListener("change", updateState);
