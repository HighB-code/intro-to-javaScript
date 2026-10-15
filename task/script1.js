// CLASS TASK: Create a programme that checks a parcel’s weight.

// Delivery charges:
// -----------------------------------------------
// Weight	                   |     Charge.      |
// -----------------------------------------------
// Above 0 kg and up to 2 kg  |    ₦1,500        |
// Above 2 kg and up to 5 kg  |    ₦3,000        |
// Above 5 kg	               |    ₦5,000        |
// -----------------------------------------------
// Task: Use if, else if, and else to display the correct charge. Display "Invalid weight" if the weight is zero or negative.


const weight= 20
if (weight < 0 || weight >= 20) {
    console.log("Invalid weight");   
} 
else if(weight <= 2 ) {
    console.log("₦1,500");

} else if (weight <=5 ) {
    console.log(" ₦3,000");
}

else {
    console.log("₦5,000");
    
}



// /UPDATED VERSION : / Task 1: Collect Student Information
// Using prompt(), ask the user to enter:
// 1. Student's full name.
// 2. Student's examination score (between 0 and 100).
const studentFullName = prompt("Enter your full name");
const studentExamScore = Number(prompt("Enter your exam score"));

// Instructions:
// - Store the student's name in a variable called studentName.
// - Store the examination score in a variable called score.
// - Use Number() to convert the score to a number.


// Task 2: Determine the Student's Grade
// Using if...else if...else, determine the student's grade according to the following criteria:
// Score	Grade	Remark
// 70–100	A	Excellent
// 60–69	B	Very Good
// 50–59	C	Good
// 40–49	D	Fair
// 0–39	F	Fail

let grade;
let remark;
if (studentExamScore < 0 || 
    studentExamScore > 100 ||
    studentExamScore === null ||
    studentFullName.trim() === "" ||
    Number.isNaN(studentExamScore)
) {
    grade = "No Grade";
    remark = "Invalid Score";
    
} else if (studentExamScore < 40) {
     grade = "Grade F";
    remark = "Fail";
    
} else if (studentExamScore < 50) {
     grade = "Grade B";
    remark = "Fair";
    
} else if (studentExamScore < 60) {
     grade = "Grade C";
    remark = "Good";
    
} else if (studentExamScore < 70) {
     grade = "Grade B";
    remark = "Very Good";
    
} else {
     grade = "Grade A";
    remark = "Excellent";
    
}
console.log(grade, remark);


// Requirements:
// 1. Create variables called grade and remark.
// 2. Use conditional statements to assign the appropriate values.
// 3. Ensure that the correct grade is assigned based on the student's score.
// Task 3: Determine Pass or Fail
let status; 
if (studentExamScore < 0 || 
    studentExamScore > 100 || 
    Number.isNaN(studentExamScore)
) {
    status = "Invalid Score. Enter a number between 0 and 100.";
} else if (studentExamScore >= 40) {
    status = "Congratulations! You passed."
} else {
    status = "Unfortunately, you failed. Please try again."
}
console.log(status);

// Using a separate if...else statement:
// - If the student's score is 40 or above, display "Congratulations! You passed."
// - Otherwise, display "Unfortunately, you failed. Please try again."
// Store the result in a variable called status.




// 1. Nested Conditions: ATM Withdrawal
const balance = 5000;
const withdrawalAmount = 5000;
const enteredPin = "2465";

// The correct PIN is "2468".
// Check the PIN first. If it is correct, check the withdrawal amount:
// - Zero or negative: "Enter a valid amount"
// - Greater than the balance: "Insufficient funds"
// - Otherwise: "Withdrawal successful" and display the remaining balance
// If the PIN is incorrect, display "Incorrect PIN".

if (enteredPin === "2468") {
    if (withdrawalAmount <= 0) {
        console.log("Enter a valid amount");
        
    } else if (withdrawalAmount > balance) {
        console.log("Insufficient funds");
        
    } else {
        console.log("Withdrawal successful");
        console.log("Remaining Balance: ", balance - withdrawalAmount);
        
    }
} else {
    console.log("Incorrect PIN");
    
}


