// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {

    // Setup the touch sensor in digital port 4
    // HINT: You can plug the touch sensor into any other digital port and change the number 4 below
    var touch = new five.Button(4);

    // When the touch sensor is pressed...
    touch.on("press", function() {
        // Display activiated in the console
        // HINT: Replace this with any action you want to take
        console.log("activated");
    });

    // When the touch sensor is released...
    touch.on("release", function() {
        // Display deactivated in the console
        // HINT: Replace this with any action you want to take
        console.log("deactivated");
    });
});