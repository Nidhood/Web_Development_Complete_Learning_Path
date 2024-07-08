'use strict';
// One of the most important features of JavaScript is the ability to create objects.

// What is an object in JavaScript?
// -> An object is a collection of properties, and a property is an association between a name (or key) and a value.
// -> A property's value can be a function, in which case the property is known as a method.
// -> In JavaScript, almost everything is an object.

// How to create an object in JavaScript?
// -> There are two ways to create an object in JavaScript:
//    1. Object literal syntax.
//    2. Object constructor syntax.

// Object literal syntax:
let person = {
    name: "John",
    age: 25,
    isStudent: true
};

// Now, we can access the properties of the object:
console.log(`person.name = ${person.name}, person.age = ${person.age}, person.isStudent = ${person.isStudent}.`);

// Object constructor syntax:
let personConstructor = {};
personConstructor.name = "Jane";
personConstructor.age = 30;
personConstructor.isStudent = false;

// Now, we can access the properties of the object:
console.log(`personConstructor.name = ${personConstructor.name}, personConstructor.age = ${personConstructor.age}, personConstructor.isStudent = ${personConstructor.isStudent}.`);

// There are two ways to access the properties of an object:
// 1. Dot notation.
// 2. Bracket notation.

// Dot notation:
console.log(`\nperson.name = ${person.name}, person.age = ${person.age}, person.isStudent = ${person.isStudent}.`);

// Bracket notation:
console.log(`person["name"] = ${person["name"]}, person["age"] = ${person["age"]}, person["isStudent"] = ${person["isStudent"]}.`);

// What is the difference between dot notation and bracket notation?
// -> Dot notation is more concise and easier to read.
// -> Bracket notation is more versatile and allows for dynamic property access.
// -> In general, you should use dot notation unless you need to use bracket notation for dynamic property access.

// Now, the objects have a lot of built-in methods that we can use:

// -> Object.keys(): Returns an array of a given object's own enumerable property names.
console.log(`\nObject.keys(person) = ${Object.keys(person)}.`);

// -> Object.values(): Returns an array of a given object's own enumerable property values.
console.log(`Object.values(person) = ${Object.values(person)}.`);

// -> Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log(`Object.entries(person) = ${Object.entries(person)}.`);

// -> Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
let personCopy = Object.assign({}, person);
console.log(`Object.assign({}, person) = ${JSON.stringify(personCopy)}.`);

// -> Object.freeze(): Freezes an object, which means that the object cannot be modified.
// Object.freeze(person);

// Now, we cannot modify the object:
// person.name = "Alice";
// console.log(`person.name = ${person.name}.`);

// -> Object.seal(): Seals an object, which means that the object cannot have new properties added to it, and existing properties cannot be removed.
// Object.seal(personConstructor);

// Now, we cannot add new properties to the object:
// personConstructor.city = "New York";
// console.log(`personConstructor.city = ${personConstructor.city}.`);

// -> Object.defineProperty(): Adds the named property described by a given descriptor to an object.
Object.defineProperty(person, "city", {
    value: "Los Angeles",
    writable: false
});

// Now, we cannot modify the property:
// person.city = "San Francisco";
// console.log(`person.city = ${person.city}.`);

// -> Object.getOwnPropertyDescriptor(): Returns a property descriptor for a named property on an object.
console.log(`Object.getOwnPropertyDescriptor(person, "city") = ${JSON.stringify(Object.getOwnPropertyDescriptor(person, "city"))}.`);

// -> Object.getOwnPropertyDescriptors(): Returns an object containing all own property descriptors for an object.
console.log(`Object.getOwnPropertyDescriptors(person) = ${JSON.stringify(Object.getOwnPropertyDescriptors(person))}.`);

// -> Object.getOwnPropertyNames(): Returns an array of all properties (enumerable or not) found directly upon a given object.
console.log(`Object.getOwnPropertyNames(person) = ${Object.getOwnPropertyNames(person)}.`);

// -> Object.getPrototypeOf(): Returns the prototype of the specified object.
console.log(`Object.getPrototypeOf(person) = ${Object.getPrototypeOf(person)}.`);

// -> Object.setPrototypeOf(): Sets the prototype of a specified object to another object or null.
let personPrototype = {
    greet() {
        console.log("Hello!");
    }
};

Object.setPrototypeOf(person, personPrototype);
person.greet();

// -> Object.create(): Creates a new object with the specified prototype object and properties.
let personCreated = Object.create(personPrototype);
personCreated.greet();

// -> Object.is(): Determines whether two values are the same value.
console.log(`Object.is(1, 1) = ${Object.is(1, 1)}.`);

// Finally, we are going to do a example of object with functions (methods):
let personMethods = {
    name: "John",
    age: 25,
    isStudent: true,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};

personMethods.greet();

// What happends if we try to access the properties of the object without using the 'this' keyword?
console.log(personMethods["greet"]()); // It returns undefined, because the function does not return anything.

// Now, we are going to do a example of object with functions (methods) and parameters:
let personParameters = {
    name: "John",
    age: 25,
    isStudent: true,
    greet(firstName) {
        return `Hello, my name is ${firstName} and I'm ${this.age} years old.`;
    }
};

console.log(personParameters.greet("Alice"));

// Now, we can access the properties of the object using the bracket notation:
console.log(personParameters["greet"]("Alice")); // Hello, my name is Alice and I'm 25 years old.

// Which is the best way to access the methods of an object?
// -> The best way to access the methods of an object is to use the dot notation, because it is more concise and easier to read.
// -> The bracket notation is more versatile and allows for dynamic method access, but it is less readable.