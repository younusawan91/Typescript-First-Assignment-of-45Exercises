// Store the names of people you'd like to invite to dinner in an array
let dinnerGuests: string[] = ["Nasir", "Haider", "Siddique"];

// Someone can't make it, so replace them with a new guest
let unableToAttend: string = dinnerGuests.pop(); // Remove the last guest who can't attend
let newGuest: string = "Yousuf"; // New guest to invite
dinnerGuests.push(newGuest); // Add the new guest to the list

// Print out the updated list of dinner guests
console.log("Updated list of dinner guests:");
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(dinnerGuests[i]);
}
