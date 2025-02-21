/*
Problem statement
Create a Playlist constructor that initializes with an empty songs array. Add a method addSong (song) to the prototype that adds a new song to the playlist.

Challenge
Implement a constructor function Playlist that initializes an empty songs array.
Attach a method addSong(song) to its prototype that adds the song to the songs array.

Hint 1
Submissions
Use this.songs.push(song); inside addSong()
*/

function Playlist() {
    // Initialize songs property
    this.songs = [];
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function (song) {
    this.songs.push(song);
}

// Test code
const myPlaylist = new Playlist();
myPlaylist.addSong("Tum Hi Ho - Ashiqui 2");
console.log(myPlaylist.songs); // Expected output: ["Tum Hi Ho - Ashiqui 2"]

myPlaylist.addSong("Chahu main yaa naa - Ashiqui 2");
console.log(myPlaylist.songs); // Expected output: ["Tum Hi Ho - Ashiqui 2", "Chahu main yaa naa - Ashiqui 2"]

myPlaylist.addSong("Sun Raha Hai Na Tu - Ashiqui 2");
console.log(myPlaylist.songs); // Expected output: ["Tum Hi Ho - Ashiqui 2", "Chahu main yaa naa - Ashiqui 2", "Sun Raha Hai Na Tu - Ashiqui 2"]

myPlaylist.addSong("Bhula Dena - Ashiqui 2");
console.log(myPlaylist.songs); // Expected output: ["Tum Hi Ho - Ashiqui 2", "Chahu main yaa naa - Ashiqui 2", "Sun Raha Hai Na Tu - Ashiqui 2", "Bhula Dena - Ashiqui 2"]

myPlaylist.addSong("Milne Hai Mujhse Aayi - Ashiqui 2");
console.log(myPlaylist.songs); // Expected output: ["Tum Hi Ho - Ashiqui 2", "Chahu main yaa naa - Ashiqui 2", "Sun Raha Hai Na Tu - Ashiqui 2", "Bhula Dena - Ashiqui 2", "Milne Hai Mujhse Aayi - Ashiqui 2"]

myPlaylist.addSong("Aasan Nahin Yahan - Ashiqui 2");
console.log(myPlaylist.songs); // Expected output: ["Tum Hi Ho - Ashiqui 2", "Chahu main yaa naa - Ashiqui 2", "Sun Raha Hai Na Tu - Ashiqui 2", "Bhula Dena - Ashiqui 2", "Milne Hai Mujhse Aayi - Ashiqui 2", "Aasan Nahin Yahan - Ashiqui 2"]

myPlaylist.addSong("Piya Aaye Na - Ashiqui 2");
console.log(myPlaylist.songs); // Expected output: ["Tum Hi Ho - Ashiqui 2", "Chahu main yaa naa - Ashiqui 2", "Sun Raha Hai Na Tu - Ashiqui 2", "Bhula Dena - Ashiqui 2", "Milne Hai Mujhse Aayi - Ashiqui 2", "Aasan Nahin Yahan - Ashiqui 2", "Piya Aaye Na - Ashiqui 2"]
