// JavaScript Practical Home Task — Event Booking Summary

// Practise string methods, concatenation, and template literals by creating an event booking summary.

// Setup

// 1. Create a folder named `event-booking-home-task`.
// 2. Inside it, create `index.html` and `script.js`.
// 3. Connect `script.js` to `index.html`.
// 4. Write your JavaScript in `script.js` and display all results using **`console.log()`.
//       Starting Values:

// js
// const guestName = "   Amina Yusuf   ";
// const eventName = "Creative Meetup";
// const eventDate = "24 October 2026";
// const venue = "Lagos Community Hall";
// const activities = "Design,Photography,Writing";
// const bookingId = "83";
// const ticketPrice = 2500;
// const ticketQuantity = 2;


// Task 1 — Prepare and Explore the Booking Details

// 1. Remove the spaces at both ends of `guestName`. Store the result in `cleanName`.
// 2. Display `cleanName` in uppercase and lowercase.
// 3. Display the length of `cleanName`.
// 4. Use `charAt()` to display the first character of `cleanName`.
// 5. Check whether `eventName` includes `"Meetup"`.
// 6. Check whether `eventName` starts with `"Creative"` and ends with `"Meetup"`.
// 7. Use `indexOf()` to find where `"Meetup"` begins in `eventName`.
// 8. Use `substring()` to extract `"Creative"` from `eventName`.
// 9. Split `activities` into an array of three activities.
// 10. Use `padStart()` to format `bookingId` as `"0083"`. Store the result in `formattedBookingId`.
// 11. Use `padEnd()` to produce `"83***"` from `bookingId`.
// 12. Use `repeat()` to display `"See you there! "` three times.

// Task 2 — Join Strings

// Create this message in two ways: using `+` and using `concat()`.

// Message: 
// Welcome, Amina Yusuf! Your booking for Creative Meetup on 24 October 2026 at Lagos Community Hall has been received. We look forward to seeing you!


// Use `cleanName`, `eventName`, `eventDate`, and `venue` instead of typing their values directly.

// Store the messages in `bookingMessage` and `secondMessage`, then display both.

// Task 3 — Use a Template Literal

// Use one template literal to create this sentence:

// Sentence:
// Amina Yusuf booked 2 tickets for Creative Meetup on 24 October 2026 at Lagos Community Hall. The booking ID is 0083, and the total cost is ₦5000.


// Insert the variable values using `${}`. Use `formattedBookingId` for the booking ID and calculate the total cost inside `${}` using `ticketPrice * ticketQuantity`.

// Store the sentence in `bookingSummary` and display it.

// Task 4 — Update the Event Name

// Use `replace()` to change `"Creative"` to `"Community"` in `eventName`.

// Display the result, then display the original `eventName` to confirm that it has not changed.

// Submission:

// 1. Check that your code runs correctly in the browser console.
// 2. Add short comments explaining your work.
// 3. Upload the complete `event-booking-home-task` folder to your GitHub repository.
// 4. Send me the GitHub link to the folder so I can review your work.

// Remember: Indexes start at `0`, and spaces count. All outputs should appear in the browser console.

const guestName = "   Amina Yusuf   ";
const cleanName = guestName.trim();
console.log(cleanName);

console.log(cleanName.toUpperCase());

console.log(cleanName.toLowerCase());
console.log(cleanName.length);
console.log(cleanName.charAt(0));

const eventName = "Creative Meetup";
console.log(eventName);

console.log(eventName.includes("Meetup"));
console.log(eventName.startsWith("Creative"));
console.log(eventName.endsWith("Meetup"));

console.log(eventName.indexOf("Meetup"));
console.log(eventName.substring("Creative"));

const eventDate = "24 October 2026";
console.log(eventDate);


const activities = "Design,Photography,Writing";
console.log(activities.split(","));

const display = "See you there! "
console.log(display.repeat(3));

const venue = "Lagos Community Hall";
console.log(venue);

const ticketPrice = 2500;
console.log(ticketPrice);

const ticketQuantity = 2;
console.log(ticketQuantity);


const bookingId = "83";
const formattedBookingId = bookingId.padStart(4, "0")
console.log(formattedBookingId);

console.log(bookingId.padEnd(5, "*"));



// const cleanName1 = "Amina Yusuf!"
// const eventDate1 = "24 October 2026"
// const venue1 = "Lagos Community Hall"
// const eventName1 = "Creative Meetup"

// // Welcome, Amina Yusuf! Your booking for Creative Meetup on 24 October 2026 at Lagos Community Hall has been received. We look forward to seeing you!

const infbookingMessage = "Welcome, " + " " + cleanName + " your booking for " + " " + eventName + "on" +" " + eventDate + " " + "at" + " "+ venue + " " + "has been received. We look forward to seeing you!"
console.log(infbookingMessage);

const secondMessage = cleanName .concat(" ",
    "your booking for", " ", eventName, "on", " ", eventDate, " ", "at", " ", venue, " ", "has been received. We look forward to seeing you!"
)
console.log(secondMessage);



console.log(`${cleanName} booked ${ticketQuantity} tickets for ${eventName} on ${eventDate} at ${venue}. The booking ID is ${formattedBookingId} and the total cost is ₦${ticketPrice * ticketQuantity}`); 

const updatedEventName = eventName.replace("Creative", "Community");
console.log(updatedEventName);








 

















