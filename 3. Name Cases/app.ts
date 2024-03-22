// // Store the person's name in a variable
let personName: string = "John Doe";

// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Convert the person's name to title case
function toTitleCase(name: string): string {
    return name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

// Print the person's name in title case
console.log("Titlecase:", toTitleCase(personName));
