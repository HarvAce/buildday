// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {
    
    // Setup the ultraviolet light sensor in analog port 0
    // HINT: You can plug the ultraviolet light sensor into any other analog port and change the number 0 below
    var light = new five.Light("A0");
    
    // When the light level changes...
    light.on("change", function() {
        // Display the light level in the console
        console.log(this.level);
    });
});