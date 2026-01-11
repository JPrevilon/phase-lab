const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;
// Initial Setup
const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// Watering Control
// Use an if-else statement to check the temperature.
if (temperature > 80) {
    console.log("Watering on");
} else {
    console.log("Watering off");
}

// Garden Lights Control
// Use an if-else statement to check timeOfDay.
if (timeOfDay === "evening" || timeOfDay === "night") {
    console.log("Lights on");
} else {
    console.log("Lights off");
}

// Soil Moisture Adjustment
// Use a while loop to increment soilMoisture by 5 until it reaches 40.
while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture);
}
