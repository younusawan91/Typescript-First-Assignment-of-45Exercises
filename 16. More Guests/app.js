// Store the names of people you'd like to invite to dinner in an array
var dinnerGuests = ["Nasir", "Siddique", "Yousuf", "Haider"];
// Someone can't make it, so replace them with a new guest
var unableToAttend = dinnerGuests.pop(); // Remove the last guest who can't attend
var newGuest = "Asif"; // New guest to invite
dinnerGuests.push(newGuest); // Add the new guest to the end of the list
// Add one new guest to the beginning of the array
dinnerGuests.unshift("Amin");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(middleIndex, 0, "Mansoor");
// Inform about the bigger dinner table
console.log("Attention, everyone! We found a bigger dinner table!");
// Print a new set of invitation messages
console.log("New set of invitation messages:");
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ".concat(dinnerGuests[i], ", you are invited to dinner at my place. Looking forward to seeing you!"));
}
