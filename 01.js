// Some Problem and Solution in JavaScript

// 1. What is Equality in JavaScript?

// let a = "42";
// let b = 42;
// console.log(a == b); // Abstract Comparison - true
// console.log(a === b); // Strict Comparison - false

// let PI = 3.14;
// if (PI != "3.14") {
//   console.log("That is PI");
// } else {
//   console.log("That is not PI");
// }

// *** Good to Know ***
// (=) - Assignment Operator
// (==) - Abstract Equality Operator (compare if values are equal)
// (===) - Strict Equality Operator (compare if values and datatype are equal)
// (!=) - Inequality Operator
// (!==) - Strict Inequality Operator

// 2. What is typeof Operator?

// let a; // typeof a - undefined
// a = undefined; // typeof a - undefined
// a = "Hello World"; // typeof a - string
// a = 42; // typeof a - number
// a = true; // typeof a - boolean
// a = { b: "c" }; // typeof a - object
// a = [1, 2, 3, 4]; // typeof a - object
// a = null; // typeof a - object (missing a meaningful value)
// a = NaN; // typeof a - number (NaN - Not a Number)
// a = function abc() {}; // typeof a - function

// *** Date(year, month, day, hour, minute, second, ms) ***
// let d = new Date(2024, 11, 11, 12, 30, 40, 50); // typeof d - object
// d = Date(); // typeof d - string
// console.log(typeof d);
// console.log(d);

// 3. Explain Scope in JavaScript?

// function ab() {
//   var a = 8;
//   console.log(a);
// }
// ab();
// console.log(a);

// *** Good to Know ***
// var - global level scope
// let & const - block level scope
// a variable that is within a function, it also can't be accessed outside of this function

// 4. Explain arrays in JavaScript

// var arr = ["Hello World", 42, true];

// console.log(arr[0]);  // Hello World
// console.log(arr[1]);  // 42
// console.log(arr[2]);  // true
// console.log(arr.length);  // 3

// 5. What is the object type?

// var obj = {
//   a: "Hello World",
//   b: 42,
//   c: true,
// };

// console.log(obj.a); // accessed with doted notation
// console.log(obj["a"]); // accessed with bracket notation

// another uses of bracket notation in object
// var obj = {
//   a: "Hello World",
//   b: 42,
// };

// var b = "a";

// console.log(obj[b]);  // Hello World
// console.log(obj['b']);  // 42

// 6. Given a string, reverse each word in the sentence

// var string = "Welcome to this JavaScript Guide!";

// var reverseEntireSentence = reverseBySeparator(string, "");

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }

// console.log(reverseEntireSentence);

// another one
// var string = string.split("").reverse().join("");
// console.log(string);

// 7. Explain what a callback function is and provide a simple example

// function modifyArray(arr, callback) {
//   // do something to arr here
//   arr.push(100);
//   // then execute the callback function that was passed
//   callback();
// }

// var arr = [1, 2, 3, 4, 5];

// modifyArray(arr, function () {
//   console.log("array has been modified", arr);
// });

// // Get the current date and time
// var today = new Date();

// // Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
// var day = today.getDay();

// // Array of day names
// var daylist = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// // Display the current day
// console.log("Today is: " + daylist[day] + ".");

// // Get the current hour, minute, and second
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();

// // Determine if it's AM or PM
// var prepand = hour >= 12 ? " PM " : " AM ";

// // Convert 24-hour format to 12-hour format
// hour = hour >= 12 ? hour - 12 : hour;

// // Check for special cases when hour is 0
// if (hour === 0 && prepand === " PM ") {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     prepand = " Noon";
//   } else {
//     hour = 12;
//     prepand = " PM";
//   }
// }

// // Check for special cases when hour is 0
// if (hour === 0 && prepand === " AM ") {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     prepand = " Midnight";
//   } else {
//     hour = 12;
//     prepand = " AM";
//   }
// }

// // Display the current time
// console.log(
//   "Current Time: " + hour + prepand + " : " + minute + " : " + second
// );
