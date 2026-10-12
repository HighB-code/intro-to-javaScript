// Class Task: Practise String Methods
// Use console.log() to display each result.
// 1. Create a string containing "Welcome to our coding club".
//    - Check whether it includes "coding".
//    - Check whether it starts with "Welcome" and ends with "club".
//    - Use substring() to extract "coding".

const message = "Welcome to our coding club"
console.log(message.startsWith.includes("coding"));
console.log(message.startsWith("welcome"));
console.log(message.endsWith(club));
console.log(message.substring(15, 21));


// 2. Create a string containing "Books are useful. Books are exciting.".
//    - Use replace() to replace the first "Books" with "Stories".
//    - Use replaceAll() to replace both occurrences.

const message1 =  "Books are useful. Books are exciting";
console.log(message1.replace("books", "stories"));
console.log(message1replaceAll("Books", "stories"));


// 3. Create a string containing "red,blue,green". Use split() to turn it into an array of colours.

const colours = "red,blue,green"
console.log(color.split(","));

// 4. Create a string containing "42".
//    - Use padStart() to produce "0042".
//    - Use padEnd() to produce "42**".

const num = "42"
console.log(num.padStart(4, "0"));
console.log(num.padEnd(4, "*"));


// 5. 5. Use concat() to join "Happy" and "Learning" with a space. Display the first character of the result using charAt(), then repeat the complete result twice using repeat().

const oneWord ="Happy"
const twoWord = "Learning"
const result = oneWord.concat(", secondWord");
console.log(result);
console.log(result.charAt(0));
console.log(result.repeat(2));
