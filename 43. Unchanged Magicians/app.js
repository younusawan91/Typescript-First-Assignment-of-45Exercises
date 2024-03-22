var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// Call make_great function with a copy of the array of magicians' names
var great_magicians = make_great(__spreadArray([], magicians, true)); // Creating a copy using the spread operator
// Call the function to show the names of the magicians before and after adding "the Great"
console.log("Original magicians:");
show_magicians(magicians);
console.log("\nMagicians after adding 'the Great':");
show_magicians(great_magicians);
