// JavaScript Home Task: Numbers and Decision-Making

// Instructions: Create a folder named javascript-home-task containing these two files:

// index.html

// home-task.js

// Link home-task.js to index.html. Complete all tasks in home-task.js. Add comments to label each task and use console.log() to display your results in the browser console.

// 1. Practise a Simple if Statement

// Create batteryLevel and assign it 15.

// Use an if statement to display "Low battery! Please charge your device." when the level is below 20.

// Change the value to 80 and observe what happens.

let batteryLevel = "15";
if (batteryLevel < 20) {
   console.log("Low battery! Please charge your device.");   
}

let batteryLevel1 = "80";
if (batteryLevel1 < 20) {
    console.log("Low battery! Please charge your device.");
 
}

// 2. Calculate a Cinema Bill

const ticketPrice = "2500";
const ticketCount = 3;
const budget = 10000;
// Convert ticketPrice to a number and calculate the total cost.

const totalCost = Number(ticketPrice) 
// Display the total with two decimal places using toFixed().

console.log(totalCost.toFixed(2));

// Use if...else to display "Booking affordable" if the total is within the budget, or "Not enough money" otherwise.

if (totalCost <= budget) {
console.log("Booking affordable");
}
else {
    console.log("Not enough money");  
}


// 3. Practise Math Methods

const measurement = 7.68;
// Display its rounded, rounded-down and rounded-up values using the appropriate Math methods.

// rounded
console.log(Math.round(measurement));

// rounded-down
console.log(Math.floor(measurement));

// rounded-up
console.log(Math.ceil(measurement));


// Find the greatest and smallest numbers among 28, 93 and 16.

const number = 28;
const number1 = 93;
const number2 = 16;

// greatest
console.log(Math.max(number, number1, number2));

// smallest
console.log(Math.min(number,number1,number2));



// 4. Check Library Access

const hasLibraryCard = true;
const hasGuestPass = false;
const isSuspended = false;

// A person can enter if they have a library card or a guest pass, and are not suspended.

// Combine logical operators to store the result in canEnter.

const conditionOne = hasLibraryCard || hasGuestPass;
const canEnter = conditionOne && !isSuspended;
console.log(canEnter);


// Use if...else to display "Access granted" or "Access denied".
const cannEnter = (hasLibraryCard || hasGuestPass) && !isSuspended;
console.log(cannEnter);

if (cannEnter) {
    console.log("Access granted");
    
} else {
    console.log("Access denied");
    
}

// Change the values to test both outcomes.

// 5. Choose a Delivery Charge

// Create a variable named distance.

// Use if...else if...else to display:

// "Delivery: ₦500" for distances from 0 to 5 km.

// "Delivery: ₦1,000" for distances above 5 up to 15 km.

// "Delivery unavailable" otherwise.


Test with 4, 12 and 20.

 
const distance = 8;
if (distance < 0 || distance > 15) {
    console.log("Delivery unavailable");
    
} else if (distance <= 5) {
    console.log("Delivery: ₦500");
    
} else {
    console.log("Delivery: ₦1,000");
    
}







// Read-up: Explain each method below in your own words and write one example each:

// Number.isFinite(), Number.isInteger(), Number.isNaN(), Number.isSafeInteger(), Number.parseInt() and Number.parseFloat().

// Submission: Push your completed javascript-home-task folder, containing index.html and home-task.js, to GitHub. Share your repository link with me and be ready to explain your code in class tomorrow morning.