// Like all languages, JavaScript has a set of operators that allow you to perform operations on values:

// Arithmetic operators:

// + (addition)
console.log('40 + 8 + 23 = ' + (40 + 8 + 23)); // 40 + 8 + 23 = 71

// - (subtraction)
console.log('40 - 8 - 23 = ' + (40 - 8 - 23)); // 40 - 8 - 23 = 9

// * (multiplication)
console.log('40 * 8 = ' + (40 * 8)); // 40 * 8 = 320

// / (division)
console.log('40 / 8 = ' + (40 / 8)); // 40 / 8 = 5

// % (modulus)
console.log('40 % 8 = ' + (40 % 8)); // 40 % 8 = 0

// ** (exponentiation)
console.log('2 ** 3 = ' + (2 ** 3)); // 2 ** 3 = 8

// ++ (increment)
let x = 10;
console.log('++x = ' + ++x); // ++x = 11

// -- (decrement)
let y = 10;
console.log('--y = ' + --y); // --y = 9

// '...' + '...' (concatenation)
let firstName = "John";
let lastName = "Doe";
console.log('firstName + " " + lastName = ' + firstName + " " + lastName); // firstName + " " + lastName = John Doe
console.log('firstName, lastName = ', firstName, lastName); // firstName, lastName = John   Doe

// Are there different ways to concatenate strings?
// -> The first one: "..." + "..." is the concatenation of two strings.
// -> The second one: "...", "..." is the concatenation of two strings separated by a comma.

// Wait a minute, what is the difference between all these concatenation methods?
// -> The first one: "..." + "..." is the most common way to concatenate strings in JavaScript.
// -> The second one: "...", "..." is the concatenation of two strings separated by a comma, which is not a valid way to concatenate strings in JavaScript.

// Conclusion?
// -> Just use the first one: "..." + "..." if you want to concatenate strings in JavaScript, and if you only want to print multiple values, use the comma separated values 🤕.

// Assignment operators:

// = (assignment)
let z = 10;

// += (addition assignment)
z += 5; // z = z + 5
console.log('z += 5 = ' + z); // z += 5 = 15

// -= (subtraction assignment)
z -= 5; // z = z - 5
console.log('z -= 5 = ' + z); // z -= 5 = 10

// *= (multiplication assignment)
z *= 5; // z = z * 5
console.log('z *= 5 = ' + z); // z *= 5 = 50

// /= (division assignment)
z /= 5; // z = z / 5
console.log('z /= 5 = ' + z); // z /= 5 = 10

// %= (modulus assignment)
z %= 5; // z = z % 5
console.log('z %= 5 = ' + z); // z %= 5 = 0

// **= (exponentiation assignment)
z **= 5; // z = z ** 5
console.log('z **= 5 = ' + z); // z **= 5 = 0

// Comparison operators:

// ==, === (equal to)
console.log('10 == "10" = ' + (10 == "10")); // 10 == 10 = true
console.log('10 === 10 = ' + (10 === 10)); // 10 === 10 = true

// !=, !== (not equal value or not equal type)
console.log('10 != "10" = ' + (10 != "10")); // 10 != 10 = false
console.log('10 !== 10 = ' + (10 !== 10)); // 10 !== 10 = false

// Why use === instead of ==?
// -> The == operator will compare for equality after doing any necessary type conversions.
// -> The === operator will not do the conversion, so if two values are not the same type === will simply return false.

// > (greater than)
console.log('10 > 5 = ' + (10 > 5)); // 10 > 5 = true

// < (less than)
console.log('10 < 5 = ' + (10 < 5)); // 10 < 5 = false

// >= (greater than or equal to)
console.log('10 >= 10 = ' + (10 >= 10)); // 10 >= 10 = true

// <= (less than or equal to)
console.log('10 <= 10 = ' + (10 <= 10)); // 10 <= 10 = true

// Logical operators:

// && (logical and)
console.log('true && true = ' + (true && true)); // true && true = true

// || (logical or)
console.log('true || false = ' + (true || false)); // true || false = true

// ! (logical not)
console.log('!true = ' + !true); // !true = false

// Bitwise operators:

// & (bitwise and)
console.log('0000 0101 & 0000 0001 = ' + ((5 & 1).toString(2).padStart(8, '0'))); // 0000 0101 & 0000 0001 = 00000001

// | (bitwise or)
console.log('0000 0101 | 0000 0001 = ' + ((5 | 1).toString(2).padStart(8, '0'))); // 0000 0101 | 0000 0001 = 00000101

// ^ (bitwise xor)
console.log('0000 0101 ^ 0000 0001 = ' + ((5 ^ 1).toString(2).padStart(8, '0'))); // 0000 0101 ^ 0000 0001 = 00000100

// ~ (bitwise not)
console.log('~0000 0101 = ' + (~5 >>> 0).toString(2).padStart(8, '0')); // ~0000 0101 = 11111010

// << (left shift)
console.log('0000 0101 << 1 = ' + ((5 << 1).toString(2).padStart(8, '0'))); // 0000 0101 << 1 = 000001010

// >> (right shift)
console.log('0000 0101 >> 1 = ' + ((5 >> 1).toString(2).padStart(8, '0'))); // 0000 0101 >> 1 = 00000010

// >>> (zero fill right shift)
console.log('0000 0101 >>> 1 = ' + ((5 >>> 1).toString(2).padStart(8, '0'))); // 0000 0101 >>> 1 = 00000010

// Conditional (ternary) operator:
console.log('10 > 5 ? "Yes" : "No" = ' + (10 > 5 ? "Yes" : "No")); // 10 > 5 ? "Yes" : "No" = Yes

// Yeah yeah, I know, I know, you are thinking, "What the heck is this guy doing with the bitwise operators?".
// But, I have to say that these operators are not used very often in JavaScript, but they are very useful in some cases.

// Finally, the fundamental question is, what is the operator precedence in JavaScript?
// -> Well, the operator precedence in JavaScript is the same as in mathematics, which means that some operators are executed before others.
// -> You can get more information about the operator precedence in JavaScript in the following link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence