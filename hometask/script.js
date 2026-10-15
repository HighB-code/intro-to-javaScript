// Javascript Home Assignment: Decision-Making Programmes1

// Task 1: Movie Ticket Eligibility (Ternary Operator)
// A cinema wants a programme that determines whether a customer qualifies for a discounted movie ticket.
// Customers aged 12 or below qualify for a children's discount.
// Instructions:
// Create a variable called customerAge.
// Assign an age to the variable.
// Use a ternary operator to determine whether the customer qualifies for a discount.
// Display either "Children's discount applied!" or "Regular ticket price applies."
// Bonus: Use prompt() to collect the customer's age and validate it before applying the ternary operator.

let age = Number(prompt("Enter your age:", "validate it before applying"));

let customerAge = age<= 12 ? "Children's discount applied!" : "Regular ticket price applies."
console.log(customerAge);

// Store the result in ticketMessage.

let ticketMessage = customerAge <= 12
 ? " congratulations, you are qualify for a children's discount." : "sorry, you are qualify for a children's discount."


// Task 2: Restaurant Food Ordering System (Switch Statement)

// A restaurant wants a programme that allows customers to select meals from its menu.

// Food option

// Price


// "rice"

//  ₦3,500

 
// "beans"

//  ₦2,500

 
// "yam"

//  ₦3,000

 
// "spaghetti"

//  ₦4,000

 
// Instructions:

// Use prompt() to ask the customer to enter a food option.

let foodOption = prompt("Enter a food option", "rice, beans, yam, spaghetti");


// Use a switch statement to determine the selected meal's price.

switch (foodOption) {
    case "rice":
        console.log("rice: ₦3,500");
        break;

    case "beans":
        console.log("beans: ₦2,500");
        break;

    case "yam":
        console.log("rice: ₦3,000");
        break;

    case "spaghetti":
        console.log("rice: ₦4,000");
        break;
        
        default:
            console.log("Sorry, this meal is unavailable.");
            
}



// Display the selected meal and its price.


// If the customer enters an option not on the menu, display "Sorry, this meal is unavailable."


// Use break appropriately after each case.


// Sample output:

// Welcome to FreshBite Restaurant!
// Selected Meal: Rice
// Price: ₦3500
// Thank you for your order!
// Bonus: Use .toLowerCase() to ensure that inputs such as "Rice" and "RICE" are accepted.

console.log("Welcome to FreshBite Restaurant!");
console.log("Selected Meal: Rice");

console.log("Price: ₦3500");
console.log("Thank you for your order!");






// Task 3: Student Scholarship Checker (Combining Conditions)

// A school offers scholarships based on examination performance and attendance.

// A student qualifies for a scholarship if:

// Their examination score is at least 80.


// Their attendance percentage is at least 90.


// Instructions:

// Use prompt() to collect the student's name, examination score and attendance percentage.
// Convert the score and attendance values to numbers.

let studentName = prompt("Enter the student's name");

let studentExamScore = Number("Enter the examination score");

let attendance = Number("Enter the attendance percentage");

// Use logical operators and if...else to check whether the student meets both requirements.
// Display "Congratulations! You qualify for a scholarship." if both conditions are met.
// Otherwise, display "You do not qualify for a scholarship."
// Validate both numeric inputs to ensure they are between 0 and 100, and reject empty or invalid entries.

let stName = "tolu"

if (studentExamScore < 0 || studentExamScore > 100 || attendancePercentage <0 || attendancePercentage > 100)
{
console.log("invalid exam score or attendance percentage");

}else if (studentExamScore >= 80 && attendance >= 90) {
    console.log("Congratulations! You qualify for a scholarship.");

} else { 
    console.log("You do not qualify for a scholarship.");   
}






// In addition to completing the programming tasks, all students are expected to carefully read and revise their JavaScript class notes, paying particular attention to the topics covered so far.