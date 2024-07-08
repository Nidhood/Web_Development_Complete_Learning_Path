'use strict';

// Fundamental concept in programming are functions, which are reusable blocks of code that accept inputs, process those inputs, and return a new data value.
// There are three ways to define a function in JavaScript:
// 1. Function Declaration.
// 2. Function Expression.
// 3. Arrow Function.

// Function Declaration:
function square_declaration(x) {
    return x * x;
}

// Now, we can call the function:
console.log(`The square of 5 is ${square_declaration(5)}.`);

// Function Expression:
const square_expression = function(x) {
    return x * x;
}

// Now, we can call the function:
console.log(`The square of 10 is ${square_expression(10)}.`);

// Arrow Function:
const square_arrow = (x) => x * x;

// Now, we can call the function:
console.log(`The square of 15 is ${square_arrow(15)}.`);

// So, what are the differences between Function Declaration, Function Expression, and Arrow Function?
// -> Function Declaration: Function declarations are hoisted, which means that you can call the function before it is declared.
//    Syntax: function functionName(parameters) { /* function body */ }
//    Example:
//    function greet() {
//        console.log('Hello');
//    }
//    greet(); // This works because of hoisting

// -> Function Expression: Function expressions are not hoisted, which means that you cannot call the function before it is declared.
//    Syntax: const functionName = function(parameters) { /* function body */ };
//    Example:
//    const greet = function() {
//        console.log('Hello');
//    };
//    greet(); // This works, but calling greet() before this line would cause an error

// -> Arrow Function: Arrow functions are always anonymous, which means that you cannot give them a name (the famous lambda functions).
//    Arrow functions do not have their own 'this' context, they inherit 'this' from the surrounding scope.
//    Syntax: const functionName = (parameters) => { /* function body */ };
//    Example:
//    const greet = () => {
//        console.log('Hello');
//    };
//    greet(); // This works, but calling greet() before this line would cause an error
//    For single expression functions, you can omit the curly braces and return keyword:
//    const sum = (a, b) => a + b;
//    console.log(sum(2, 3)); // 5

// Now, let's see some examples of function with multiple parameters and multiple return values:
function sum(a, b) {
    return a + b;
}
console.log(`sum(5, 10) = ${sum(5, 10)}.`);

// Now, let's see some examples of arrow function with multiple parameters and multiple return values:
const sum_arrow = (currentYear, birthYear, firstName) => {
    let age = currentYear - birthYear;
    let retirement = 65 - age;
    return `${firstName} is ${age} years old and will retire in ${retirement} years.`;
}

console.log(sum_arrow(2024, 1996, "John"));

// Now, we are going to do some typical examples of functions (draw a diamond) with JavaScript:
function drawDiamond(n) {
    if (n % 2 === 0) {
        n++;
    }
    let spaces = (n - 1) / 2;
    let stars = 1;
    for (let i = 0; i < n; i++) {
        console.log(' '.repeat(spaces) + '*'.repeat(stars));
        if (i < Math.floor(n / 2)) {
            spaces--;
            stars += 2;
        } else {
            spaces++;
            stars -= 2;
        }
    }
}

drawDiamond(5);

// Finally, we are going to do some recursive functions with JavaScript (The Fibonacci Sequence):
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`fibonacci(10) = ${fibonacci(10)}.`);