// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {
    
    // Setup the sound sensor in analog port 0
    // HINT: You can plug the sound sensor into any other analog port and change the number 0 below
    var mic = new five.Sensor("A0");

    // When sound is detected...
    mic.on("data", function(value) {
        // Display the amount of sound detected in the console
        // HINT: Replace this with any action you want to take
        console.log(value);
    });
});