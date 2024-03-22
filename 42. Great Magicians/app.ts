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

// Call make_great function to modify the array of magicians
magicians = make_great(magicians);

// Call the function to show the names of the magicians
show_magicians(magicians);
