// First we are going to create variables, which are like boxes where we can store data inside our computer's memory.
let string = "Hello World!";                                     // This is a string, which is a sequence of characters.
let number = 7;                                                // This is a number, which is a numeric data type.
let boolean = true;                                            // This is a boolean, which is a logical data type that can only be true or false.
let undefinedVar = undefined;                                // This is a variable that has not been assigned a value yet, is the same of not declaring a value (let undefinedVar;).
let nullVar = null;                                               // This is a variable that has been explicitly assigned a null value.
let bigNumber = 1234567890123456789012345678901234567890n;      // This is a BigInt, which is a numeric data type that can represent integers with arbitrary precision.
let objectExample = {
    name: "John",
    age: 25,
    isStudent: true
};                                                                      // This is an object, which is a collection of key-value pairs.

// The usability of variables, especially in JavaScript, is that they can be reassigned at any time.
string = "Now I'm a different string.";
number = 10;
boolean = false
undefinedVar = undefined;
nullVar = null;
objectExample = {
    name: "Jane",
    age: 30,
    isStudent: false
};
bigNumber = 9876543210987654321098765432109876543210n;

// But, what type of data types are these variables?
// -> Primitive data types: These are the most basic data types in JavaScript (string, number, boolean, undefined, null).
// -> Non-primitive data types: These are more complex data types in JavaScript (object, array, function), which are also known as reference data types.
console.log("Primitive data types: " + typeof string + ", " + typeof number + ", " + typeof boolean + ", " + typeof undefinedVar + ", " + typeof nullVar + ", " + typeof bigNumber + ".");

console.log("Non-primitive data types: " + typeof objectExample + ".\n");

// We can also create variables using the var and const keywords, which means that the variable cannot be reassigned (inmutable).
const constVariable = "This is a const variable.";

// Important considerations creating variables (naming conventions):
console.log("Important considerations creating variables (naming conventions):\n");
console.log("1. Variables cannot start with a number.");
console.log("2. Variables cannot contain spaces.");
console.log("3. Variables cannot be the same name as a reserved keyword.");
console.log("4. Variables are case-sensitive.");
console.log("5. Variables should be named in camelCase.");
console.log("6. Only '_' and '$' are allowed as special characters in variable names, anything else will throw an error.");
console.log("7. Implicit, variables should be named in English, and very importantly, they should be named descriptively (meaningful names).");

// Finally, for not stay with the doubt, what is the difference between let, var and const?
// -> let: Variables declared with the let keyword can be reassigned, but cannot be redeclared within the same scope (which means that you cannot declare a variable with the same name in the same scope).
// -> var: Variables declared with the var keyword can be reassigned and redeclared within the same scope (which is not recommended).
// -> const: Variables declared with the const keyword cannot be reassigned or redeclared within the same scope.