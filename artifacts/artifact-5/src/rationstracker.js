// Load saved data
let foodAmount = Number(localStorage.getItem("foodAmount")) || 0;
let foodHistory = JSON.parse(localStorage.getItem("foodHistory")) || [foodAmount];

// Get HTML elements
const foodCount = document.getElementById("food-count");
const foodInput = document.getElementById("food-input");
const addButton = document.getElementById("add-food");
const removeButton = document.getElementById("remove-food");

// Helper functions
function saveData() {
    localStorage.setItem("foodAmount", foodAmount);
    localStorage.setItem("foodHistory", JSON.stringify(foodHistory));
}

function updateDisplay() {
    foodCount.textContent = foodAmount;
}

function updateChart() {
    rationChart.data.labels = foodHistory.map(function(value, index) {
        return "Change " + index;
    });

    rationChart.data.datasets[0].data = foodHistory;
    rationChart.update();
}

// Create Chart.js chart
const rationChart = new Chart(document.getElementById("rationChart"), {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "Available rations",
            data: [],
            borderColor: "#8b6f3d",
            backgroundColor: "#e6d8a8",

            pointBackgroundColor: "#e6d8a8",
            pointBorderColor: "#8b6f3d",

            borderWidth: 3,
            tension: 0.3
        }]
    }
});

// Add rations
addButton.addEventListener("click", function() {
    const amount = Number(foodInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    foodAmount = foodAmount + amount;
    foodHistory.push(foodAmount);

    saveData();
    updateDisplay();
    updateChart();

    foodInput.value = "";

    alert("The changes have been applied.");
});

// Remove rations
removeButton.addEventListener("click", function() {
    const amount = Number(foodInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    if (!confirm("Do you really want to remove this quantity?")) {
        return;
    }

    if (amount > foodAmount) {
        alert("RED ALERT! Uh-oh, it looks like you don't have enough supplies available.");
        return;
    }

    foodAmount = foodAmount - amount;
    foodHistory.push(foodAmount);

    saveData();
    updateDisplay();
    updateChart();

    foodInput.value = "";

    if (foodAmount < 10) {
        alert("The changes have been applied.\n\nWarning! Food stock is low. Please restock soon.");
    } else {
        alert("The changes have been applied.")
    }

});

// Initial page load
updateDisplay();
updateChart();