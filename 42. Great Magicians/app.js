// Define the show_magicians function
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define the make_great function
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("".concat(magician, " the Great"));
    }
    return great_magicians;
}
// Create an array of magician's names
var magicians = ['Eijaz Mughal', 'M. Yaseen', 'Mian Afzal Rashid'];
// Call make_great function to modify the array of magicians
magicians = make_great(magicians);
// Call the function to show the names of the magicians
show_magicians(magicians);
