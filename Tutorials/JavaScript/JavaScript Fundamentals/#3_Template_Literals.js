// So, what are template literals?
// -> Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
// -> Just use the backtick (`) character to create template literals, and you can use the ${} syntax to interpolate variables and expressions.

// First we are going to do some concatenation with template literals:
let firstName = "John";
let lastName = "Doe";
console.log(`firstName + " " + lastName = ${firstName} ${lastName}`); // firstName + " " + lastName = John Doe

// Now we are going to do some arithmetic operations with template literals:
let x = 10;
let y = 5;
console.log(`x + y = ${x + y}`); // x + y = 15

// We can specify the number of decimal places with template literals? Yes, we can!
let z = 10.123456789;
console.log(`z = ${z.toFixed(2)}`); // z = 10.12

// Now, we can also use template literals to create multi-line strings:
let multiLineString = `This is a multi-line string.
This is the second line.
This is the third line.`;
console.log(multiLineString);

// Also, we can also use template literals to interpolate objects:
let person = {
    name: "John",
    age: 25,
    isStudent: true
};
console.log(`person = ${person.name}, ${person.age}, ${person.isStudent}.`);

// Also, we can also use template literals to interpolate arrays:
let fruits = ["Apple", "Banana", "Cherry"];
console.log(`fruits = ${fruits[0]}, ${fruits[1]}, ${fruits[2]}.`);

// Also, we can also use template literals to interpolate functions:
function sum(a, b) {
    return a + b;
}
console.log(`sum(5, 10) = ${sum(5, 10)}.`);

// Finally, Why we should use template literals?
// -> Template literals are more readable and easier to use than regular strings.
// -> Template literals can be used to create multi-line strings.