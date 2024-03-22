// // Store the person's name in a variable
var personName = "John Doe";
// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());
// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());
// Convert the person's name to title case
function toTitleCase(name) {
    return name.toLowerCase().replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
// Print the person's name in title case
console.log("Titlecase:", toTitleCase(personName));
