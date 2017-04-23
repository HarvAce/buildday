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
    var rotary = new five.Sensor("A0");

    // When the rotary encoder is turned...
    rotary.scale(0, 255).on("change", function() {
        // Display the turn value in the console
        // HINT: Replace this with any action you want to take
        console.log(this.value);
    });
});