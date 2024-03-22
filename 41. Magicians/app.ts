// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
let magicians: string[] = ['Eijaz Mughal', 'M. Yaseen', 'Mian Afzal Rashid'];

// Call the function to show the names of the magicians
show_magicians(magicians);
