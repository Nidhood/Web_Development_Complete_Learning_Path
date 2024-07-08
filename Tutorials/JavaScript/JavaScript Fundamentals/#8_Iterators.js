// A very basic concept in programming is the ability to iterate over a collection of elements, such as an array or an object.
// In JavaScript, there are several ways to iterate over arrays and objects, each with its own advantages and use cases.
// In this snippet, we will explore some of the most common methods for iterating over arrays and objects in JavaScript.

// Formally, What is an iterator in JavaScript?
// -> An iterator is an object that provides a way to access the elements of a collection one at a time, while keeping track of its current position within that sequence.

// Iterating over Arrays:
// -> Arrays in JavaScript are a type of collection that stores multiple values in a single variable.
// -> There are several ways to iterate over arrays in JavaScript, including for loops, forEach method, for...of loop, and map method.

// Using a for loop:
// -> The for loop is a traditional way to iterate over arrays in JavaScript.
// -> It allows you to specify the start and end conditions, as well as the increment or decrement step.
// -> Here's an example of using a for loop to iterate over an array of numbers and log each element to the console:
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {

    // Log each element to the console (without a newline character).
    console.log(numbers[i]);
}
console.log("");

// Using the forEach method:
// -> The forEach method is a built-in method of arrays in JavaScript that allows you to iterate over each element of an array and perform a function on each element.
numbers.forEach(number => console.log(number));
console.log("");

// Using the for...of loop:
// -> The for...of loop is a modern way to iterate over arrays in JavaScript.
// -> It allows you to iterate over the elements of an array without having to keep track of the index.
// -> Here's an example of using a for...of loop to iterate over an array of numbers and log each element to the console:
for (let number of numbers) {
        // Log each element to the console (without a newline character).
        console.log(number);
}
console.log("");

// Using for...in loop:
// -> The for...in loop is another way to iterate over arrays in JavaScript.
// -> It allows you to iterate over the keys of an array, rather than the values.
// -> Here's an example of using a for...in loop to iterate over an array of numbers and log each element to the console:
for (let index in numbers) {

        // Log each element to the console (without a newline character).
        console.log(numbers[index]);
}
console.log("");

// So, what are the differences between for loop, forEach method, for...of loop, and for...in loop?
// -> The for loop is a traditional way to iterate over arrays in JavaScript, but it requires you to keep track of the index.
// -> The forEach method is a built-in method of arrays that allows you to iterate over each element and perform a function on each element.
// -> The for...of loop is a modern way to iterate over arrays that allows you to iterate over the elements without having to keep track of the index.
// -> The for...in loop is another way to iterate over arrays that allows you to iterate over the keys of the array.
// In general, you should use the for...of loop or forEach method for iterating over arrays, as they are more concise and easier to read.

// While loops:
// -> The while loop is another way to iterate over arrays in JavaScript.
// -> It allows you to specify a condition that must be true in order for the loop to continue.
// -> Here's an example of using a while loop to iterate over an array of numbers and log each element to the console:
let index = 0;

while (index < numbers.length) {

        // Log each element to the console (without a newline character).
        console.log(numbers[index]);

        // Increment the index.
        index++;
}
console.log("");

// Do...while loops:
// -> The do...while loop is similar to the while loop, but it always executes the loop body at least once before checking the condition.
// -> Here's an example of using a do...while loop to iterate over an array of numbers and log each element to the console:
let index2 = 0;

do {

        // Log each element to the console (without a newline character).
        console.log(numbers[index2]);

        // Increment the index.
        index2++;
} while (index2 < numbers.length);
console.log("");

// Now, let's see how to stop the loop when a certain condition is met:

// Break statement:
// -> The break statement is used to exit a loop early, before the loop condition is met.
// -> Here's an example of using a for loop to iterate over an array of numbers and stop the loop when the number 3 is encountered:
for (let i = 0; i < numbers.length; i++) {

        // Log each element to the console (without a newline character).
        console.log(numbers[i]);

        // Check if the current number is 3.
        if (numbers[i] === 3) {
            console.log("Number 3 encountered, stopping the loop.");
            break;
        }
}
console.log("");

// Continue statement:
// -> The continue statement is used to skip the current iteration of a loop and continue to the next iteration.
// -> Here's an example of using a for loop to iterate over an array of numbers and skip the number 3:
for (let i = 0; i < numbers.length; i++) {

        // Check if the current number is 3.
        if (numbers[i] === 3) {
            console.log("Number 3 encountered, skipping this iteration.");
            continue;
        }

        // Log each element to the console (without a newline character).
        console.log(numbers[i]);
}
console.log("");

// Iterating over Objects:
// -> Objects in JavaScript are a type of collection that stores key-value pairs.
// -> There are several ways to iterate over objects in JavaScript, including for...in loop and Object.keys, Object.values, and Object.entries methods.
let person = {
    name: "John",
    age: 25,
    isStudent: true
};

for (let key in person) {

    // Log the key and value to the console.
    console.log(`${key}: ${person[key]}`);
}
