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

// Now, let's see how JavaScript works with arrays:
let fruits = ["Apple", "Banana", "Cherry"]; // This is an array, which is a collection of elements.
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// We can access the elements of an array using the index of the element (starting from 0).
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry

// Important methods for arrays:

// Length: Returns the number of elements in the array.
console.log("\nLength: " + fruits.length); // 3

// IndexOf: Returns the index of the first occurrence of a specified element in the array.
console.log("IndexOf: " + fruits.indexOf("Banana")); // 1

// Includes: Returns true if the array contains a specified element, otherwise false.
console.log("Includes: " + fruits.includes("Cherry")); // true

// Reverse: Reverses the order of the elements in the array.
console.log("Reverse: " + fruits.reverse()); // ["Cherry", "Banana", "Apple"]

// Sort: Sorts the elements of the array.
console.log("Sort: " + fruits.sort()); // ["Apple", "Banana", "Cherry"]

// Fill: Fills all the elements of the array with a specified value.
console.log("Fill: " + fruits.fill("Date")); // ["Date", "Date", "Date"]

// Filter: Creates a new array with all elements that pass a test (provided as a function).
let filteredFruits = fruits.filter(fruit => fruit === "Date");
console.log("Filter: " + filteredFruits); // ["Date"]

// Map: Creates a new array with the results of calling a function for every element in the array.
let mappedFruits = fruits.map(fruit => fruit + "s");
console.log("Map: " + mappedFruits); // ["Dates", "Dates", "Dates"]

// Reduce: Reduces the array to a single value (from left-to-right) using a function.
let reducedFruits = fruits.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Reduce: " + reducedFruits); // DatesDatesDates

// Some: Checks if at least one element in the array passes a test (provided as a function).
let someFruits = fruits.some(fruit => fruit === "Dates");
console.log("Some: " + someFruits); // true

// Every: Checks if all elements in the array pass a test (provided as a function).
let everyFruits = fruits.every(fruit => fruit === "Dates");
console.log("Every: " + everyFruits); // true

// Find: Returns the value of the first element in the array that passes a test (provided as a function).
let foundFruit = fruits.find(fruit => fruit === "Dates");
console.log("Find: " + foundFruit); // Dates

// FindIndex: Returns the index of the first element in the array that passes a test (provided as a function).
let foundIndex = fruits.findIndex(fruit => fruit === "Dates");
console.log("FindIndex: " + foundIndex); // 0

// Fill: Fills all the elements of the array with a specified value.
console.log("Fill: " + fruits.fill("Date")); // ["Date", "Date", "Date"]

// CopyWithin: Copies array elements within the array, to and from specified positions.
console.log("CopyWithin: " + fruits.copyWithin(1, 0, 1)); // ["Date", "Date", "Date"]

// Flat: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedFruits = ["Apple", ["Banana", "Cherry"]];
let flatFruits = nestedFruits.flat();
console.log("Flat: " + flatFruits); // ["Apple", "Banana", "Cherry"]

// Push: Adds an element to the end of the array.
fruits.push("Date");
console.log("Push: " + fruits); // ["Apple", "Banana", "Cherry", "Date

// Pop: Removes the last element from the array.
fruits.pop();
console.log("Pop: " + fruits); // ["Apple", "Banana", "Cherry"]

// Shift: Removes the first element from the array.
fruits.shift();
console.log("Shift: " + fruits); // ["Banana", "Cherry"]

// Unshift: Adds an element to the beginning of the array.
fruits.unshift("Apple");
console.log("Unshift: " + fruits); // ["Apple", "Banana", "Cherry"]

// Slice: Returns a new array with a portion of the original array.
let slicedFruits = fruits.slice(1, 2); // The first parameter is the starting index, and the second parameter is the ending index (not inclusive).
console.log("Slice: " + slicedFruits); // ["Banana"]

// Splice: Adds or removes elements from an array.
fruits.splice(1, 1, "Date");
console.log("Splice: " + fruits); // ["Apple", "Date", "Cherry"]

// Concat: Concatenates two or more arrays.
let moreFruits = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log("Concat: " + allFruits); // ["Apple", "Date", "Cherry", "Fig", "Grape"]

// Join: Joins all elements of an array into a string.
let fruitsString = allFruits.join(", ");
console.log("Join: " + fruitsString); // Apple, Date, Cherry, Fig, Grape

// Important considerations creating variables (naming conventions):
console.log("\nImportant considerations creating variables (naming conventions):\n");
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