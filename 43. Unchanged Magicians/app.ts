// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}

// Create an array of magician's names
let magicians: string[] = ['Eijaz Mughal', 'M. Yaseen', 'Mian Afzal Rashid'];

// Call make_great function with a copy of the array of magicians' names
let great_magicians: string[] = make_great([...magicians]); // Creating a copy using the spread operator

// Call the function to show the names of the magicians before and after adding "the Great"
console.log("Original magicians:");
show_magicians(magicians);
console.log("\nMagicians after adding 'the Great':");
show_magicians(great_magicians);
