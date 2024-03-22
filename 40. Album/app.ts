// Define the make_album function
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Call the function to make three dictionaries representing different albums
let album1 = make_album('Ali Azmat', 'Junoon');
let album2 = make_album('Ali Zafar', 'Huqa Pani', 7); // Include number of tracks
let album3 = make_album('Faisal Kapadia', 'String');

// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
