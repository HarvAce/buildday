// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");
var songs = require("j5-songs");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the board is ready...
board.on("ready", function() {
    
    // Write your own Internet of Things toy here
    // HINT: Copy and paste code from sensor examples to get started
    
});