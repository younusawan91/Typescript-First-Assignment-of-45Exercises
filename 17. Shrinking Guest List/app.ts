// Store the names of people you'd like to invite to dinner in an array
let dinnerGuests: string[] = ["Haider", "Nasir", "Siddique", "Yousuf", "Mansoor", "Asif", "Amin"];

// Someone can't make it, so replace them with a new guest
let unableToAttend: string = dinnerGuests.pop(); // Remove the last guest who can't attend
let newGuest: string = "Amin"; // New guest to invite
dinnerGuests.push(newGuest); // Add the new guest to the end of the list

// Add one new guest to the beginning of the array
dinnerGuests.unshift("Haider");

// Add one new guest to the middle of the array
let middleIndex: number = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(middleIndex, 0, "Siddique");

// Inform about the bigger dinner table
console.log("Attention, everyone! We found a bigger dinner table!");

// Print a new set of invitation messages
console.log("New set of invitation messages:");
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, you are invited to dinner at my place. Looking forward to seeing you!`);
}

// Announcement about the shrinking guest list
console.log("Sorry, but due to unforeseen circumstances, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (dinnerGuests.length > 2) {
    let removedGuest: string = dinnerGuests.pop();
    console.log(`Sorry ${removedGuest}, I'm unable to invite you to dinner.`);
}

// Print a message to the two people still on the list, letting them know they're still invited
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, you're still invited to dinner!`);
}

// Remove the last two names from the list to have an empty list
dinnerGuests.splice(0, dinnerGuests.length);

// Print the final list to ensure it's empty
console.log("Final list of dinner guests:", dinnerGuests);
