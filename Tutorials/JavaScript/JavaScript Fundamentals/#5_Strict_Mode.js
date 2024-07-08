// What is strict mode?
// -> Strict mode is a way to introduce better error-checking into your code.
// -> It makes debugging easier.
// -> It prevents the use of global variables.
// -> It prevents the use of reserved words.
// -> It prevents the use of duplicate parameter names.
// -> It makes it easier to write "secure" JavaScript.
// -> It changes previously accepted "bad syntax" into real errors.
// -> So, to enable strict mode, we just need to add the "use strict" directive at the beginning of the file or function.
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // As we can see, we have a typo here, we wrote "hasDriverLicense" instead of "hasDriversLicense", where using strict mode, it will throw an error.
let interface = 123; // This is a reserved word, so it will throw an error if we use strict mode.

// So in conclusion, using strict mode is a good practice to avoid errors and write more secure code.