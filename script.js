// Some Problem and Solution in JavaScript

// 1. What is Equality in JavaScript?

// let a = "42";
// let b = 42;
// console.log(a == b); // Abstract Comparison - true
// console.log(a === b); // Strict Comparison - false

// let PI = 3.14;
// if (PI !== "3.14") {
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

// 2. What is typeof Operator in JavaScript?

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

// *** let d = new Date(year, month, day, hour, minute, second, ms) - we can pass arguments like this ***
// let d = new Date(2024, 11, 11, 12, 30, 40, 50); // typeof d - object
// d = Date(); // typeof d - string
// console.log(typeof d);
// console.log(d);

// 3. Explain Scope in JavaScript.

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

// 4. Explain Arrays in JavaScript.

// var arr = ["Hello World", 42, true];

// console.log(arr[0]);  // Hello World
// console.log(arr[1]);  // 42
// console.log(arr[2]);  // true
// console.log(arr.length);  // 3

// 5. What is the object type in JavaScript?

// var obj = {
//   a: "Hello World",
//   b: 42,
//   c: true,
// };

// console.log(obj.a); // accessed with doted notation
// console.log(obj["a"]); // accessed with bracket notation

// *** another uses of bracket notation in object ***
// var obj = {
//   a: "Hello World",
//   b: 42,
// };

// var b = "a";

// console.log(obj[b]); // Hello World
// console.log(obj["b"]); // 42
// console.log(obj.b); // 42

// 6. Given a string, Reverse each word in the sentence.

// var string = "Welcome to this JavaScript Guide";
// var blank = "";

// string = string.split(blank).reverse().join(blank);
// console.log(string);

// *** spilt string using function ***
// function reverseBySeparator(string, separator) {
//   let newString = string.split(separator).reverse().join(separator);
//   console.log(newString);
// }
// reverseBySeparator(string, blank);

// 7. Explain what is callback function?

// function modifyArray(arr, callback) {
//   arr.push(100);
//   callback();
// }

// var arr = [1, 2, 3, 4, 5];

// modifyArray(arr, function () {
//   console.log("array has been modified", arr);
// });

// // *** another example ***
// function mArray(num1, num2, callback) {
//   let sum = num1 + num2;
//   callback(sum);
//   // if (callback) callback(sum);
//   // return sum;
// }

// mArray(5, 2, function (res) {
//   console.log(res);
// });

// // *** another example ***
// function abc(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// function display(res) {
//   console.log(res);
// }

// let res = abc(10, 20);
// display(res);

// 8. JavaScript Array Reduce Examples.

// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.reduce((acc, cur) => {
//   return acc < cur;
// }); // we can use default or initial value

// console.log(result);

// *** Good to Know ***
// that's array reduce function can reduce an array in a single element. that's why it's call reduce function
// reduce function can take four arguments (preValue, currentValue, currentIndex, array)
// reduce function can memories previous result
