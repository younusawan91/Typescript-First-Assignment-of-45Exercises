// Store the names of people you'd like to invite to dinner in an array
var dinnerGuests = ["Nasir", "Haider", "Siddique"];
// Someone can't make it, so replace them with a new guest
var unableToAttend = dinnerGuests.pop(); // Remove the last guest who can't attend
var newGuest = "Yousuf"; // New guest to invite
dinnerGuests.push(newGuest); // Add the new guest to the list
// Print out the updated list of dinner guests
console.log("Updated list of dinner guests:");
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log(dinnerGuests[i]);
}
