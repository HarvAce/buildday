// Setup dependencies
var songs = require("j5-songs")
var five = require("johnny-five")
var Edison = require("edison-io")

// Setup the Intel Edison
var board = new five.Board({
    io = new Edison()
});

// When the Intel Edison board is ready...
board.on("ready", function(){
    // Setup the buzzer in digital port 6
    // HINT: You can plug the buzzer into any other digital port and change the number 6 below
    // HINT: If the buzzer ever starts to squeal, unplug the buzzer from the Intel Edison
    var buzzer = new five.Piezo(6);
    
    // Play a song
    // HINT: There are many different songs you can play
    var song = songs.load("jingle-bells");
    buzzer.play(song);
})