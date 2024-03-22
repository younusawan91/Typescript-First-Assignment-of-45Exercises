// Store the locations you'd like to visit in an array
let placesToVisit: string[] = ["Naran", "Kaghan", "Kashmir", "Sawat", "Lahore"];

// Print the array in its original order
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original Order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original Order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show that its order has changed
console.log("Reversed Order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();

// Print the list to show it’s back to its original order
console.log("Original Order:", placesToVisit);

// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();

// Print the array to show that its order has been changed
console.log("Sorted in Alphabetical Order:", placesToVisit);

// Sort to change the array so it’s stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the list to show that its order has changed
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
