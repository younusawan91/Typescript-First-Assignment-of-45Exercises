// List of current users
let current_users: string[] = ['Younus', 'Babar', 'Nasir', 'Siddique', 'Haider'];

// List of new users
let new_users: string[] = ['Younus', 'Yousuf', 'Aslam', 'Mansoor', 'Haider'];

// Loop through the new_users list to check for unique usernames
for (let new_user of new_users) {
    // Check if the new username is already in use (case insensitive comparison)
    if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`The person '${new_user}' will need to enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}
