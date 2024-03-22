// List of current users
var current_users = ['Younus', 'Babar', 'Nasir', 'Siddique', 'Haider'];
// List of new users
var new_users = ['Younus', 'Yousuf', 'Aslam', 'Mansoor', 'Haider'];
var _loop_1 = function (new_user) {
    // Check if the new username is already in use (case insensitive comparison)
    if (current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("The person '".concat(new_user, "' will need to enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
};
// Loop through the new_users list to check for unique usernames
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
