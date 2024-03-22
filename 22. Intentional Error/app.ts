// Define an array of fruits
let fruits: string[] = ["Apple", "Banana", "Orange"];

// Intentionally access an invalid index to produce an index error
// Accessing index 3 which is out of bounds
console.log(fruits[3]); // This will produce an index error

// Correct the error by accessing a valid index
console.log(fruits[2]); // Accessing index 2 (Orange)

// Now the program should work correctly without any index errors
