// Define variables for testing
var string1 = "hello";
var string2 = "world";
var number1 = 5;
var number2 = 10;
var array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Test for equality with strings:");
console.log("Is string1 == 'hello'? I predict True.");
console.log(string1 == "hello");
console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2);
// Tests using the lowercase function
console.log("Test using the lowercase function:");
console.log("Is string1 in lowercase equal to 'hello'? I predict True.");
console.log(string1.toLowerCase() == "hello");
// Numerical tests
console.log("Numerical tests:");
console.log("Is number1 == 5? I predict True.");
console.log(number1 == 5);
console.log("Is number1 > number2? I predict False.");
console.log(number1 > number2);
console.log("Is number2 >= 10? I predict True.");
console.log(number2 >= 10);
console.log("Is number1 < 2? I predict False.");
console.log(number1 < 2);
// Tests using "and" and "or" operators
console.log("Tests using 'and' and 'or' operators:");
console.log("Is number1 > 3 and number2 < 20? I predict True.");
console.log(number1 > 3 && number2 < 20);
console.log("Is number1 > 3 or number2 < 5? I predict True.");
console.log(number1 > 3 || number2 < 5);
// Test whether an item is in an array
console.log("Test whether an item is in an array:");
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3));
// Test whether an item is not in an array
console.log("Test whether an item is not in an array:");
console.log("Is 6 not in the array? I predict True.");
console.log(!array.includes(6));
