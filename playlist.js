// Izarra Villareal CS 81 Module 6 Assignment 6A: Code Review

// This code is a constructor function that defines a Playlist object.
function Playlist(name) {
  this.name = name; // Name of the playlist referring to this keyword as the new object being created
  this.songs = []; // Array to hold songs
  this.currentSong = null; // Currently playing song
}

// Method to add a song to the songs array of the Playlist object
Playlist.prototype.addSong = function(songTitle) { // Uses the prototype property to add methods to the Playlist constructor function
  this.songs.push(songTitle);
};

// Method to play the first song in the playlist and set the currentSong property then log it to the console
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
  }
};

// Method to skip the current song and play the next one in the songs array using the shift method
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift(); // One improvement would be to not use shift since it is destructive and removes the first element from the array. Instead, we could use an index to track the current song.
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

// Method to list all songs in the playlist using the this keyword to access the name and songs properties, and uses the join method to format the output
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};

// Example usage that uses the constructed Playlist object to create a playlist object called myMix and manipulate it.
let myMix = new Playlist("My Chill Mix"); // Create a new playlist called "My Chill Mix"
myMix.addSong("Lofi Study"); // Add songs to the playlist using the addSong method
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst(); // Play the first song using the playFirst method
myMix.skipSong(); // Skip the current song using the skipSong method
myMix.listSongs(); // List all songs in the playlist using the listSongs method