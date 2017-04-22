// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {

    // Setup the rotary encoder in analog port A0
    // HINT: You can plug the rotary encoder into any other analog port and change the number 0 below
    var rotary = new five.Sensor("A0");

    // Setup the servo motor in digital port 5
    // HINT: You can plug the servo motor into any other digital port and change the number 5 below
    var servo = new five.Servo(5);

    // When the rotary encoder is turned...
    rotary.scale(0, 180).on("change", function() {
        // Move the servo motor to that position
        servo.to(this.value);
    });
});