// Any fundamental language has the if-else statement, and JavaScript is no exception. The if-else statement is used to execute a block of code if a condition is true. If the condition is false, another block of code can be executed. The syntax is as follows:

const age = 18;
const isAdult = age >= 18;

// If statement, evaluates a condition and executes a block of code if the condition is true.
if (isAdult) {
    console.log("You are old enough to drive 🚗!");
}

// Else statement, executes a block of code if the condition in the if statement is false.
const timeToWaitThePieCooked = 40;

if (timeToWaitThePieCooked >= 0) {
    console.log("The pie is fresh, wait a little longer 🥧.");
} else if (timeToWaitThePieCooked >= 10) {
    console.log("The pie is still cooking, please wait a little longer 🥧.");
} else if (timeToWaitThePieCooked >= 20) {
    console.log("The pie is almost ready, just a few more minutes 🥧.");
} else if (timeToWaitThePieCooked >= 30) {
    console.log("The pie is ready to eat, enjoy! 🥧.");
} else {
    console.log("The pie is burnt, please try again 🥧.");
}

// We love him, we need him, the switch statement is a powerful tool that allows us to execute a block of code depending on the value of a variable.
// The syntax is as follows:
const day = "monday";

switch (day) {
    case "monday":
        console.log("Today is Monday, the week just started.");
        break;
    case "tuesday":
        console.log("Today is Tuesday, we are in the middle of the week.");
        break;
    case "wednesday":
        console.log("Today is Wednesday, we are in the middle of the week.");
        break;
    case "thursday":
        console.log("Today is Thursday, we are in the middle of the week.");
        break;
    case "friday":
        console.log("Today is Friday, the week is almost over.");
        break;
    case "saturday":
        console.log("Today is Saturday, enjoy the weekend!");
        break;
    case "sunday":
        console.log("Today is Sunday, enjoy the weekend!");
        break;
    default:
        console.log("Invalid day.");
}

// Remembering ternary operator? Well, instead of using the if-else statement, we can use the ternary operator to write a more concise code, also inside of the template literals.
const currentTime = 6;
const isMorning = currentTime < 12;

console.log(`Good ${isMorning ? "morning" : "afternoon"}, it's ${currentTime} o'clock 🧐.`);