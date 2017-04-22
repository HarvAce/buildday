// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {
    
    // Setup the button in digital port 2
    // HINT: You can plug the button into any other digital port and change the number 2 below
    var button = new five.Button(2);

    // When the button is pressed...
    button.on("press", function() {
        // Display button pressed in the console
        console.log("button pressed");
    });

    // When the button is released...
    button.on("release", function() {
        // Display button released in the console
        console.log("button released");
    });
});