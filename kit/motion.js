// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

board.on("ready", function() {

    // Setup the motion sensor in digital port 2
    // HINT: You can plug the motion sensor into any other digital port and change the number 2 below
    var motion = new five.Motion({
        controller: "PIR",
        pin: "2"
    });

    // Calibrate the motion sensor - must be done to initialize the sensor
    motion.on("calibrated", function() {
        // Display calibrated in the console
        console.log("calibrated");
    });

    // When motion is detected...
    motion.on("motionstart", function() {
        // Display motionstart in the console
        // HINT: Replace this with any action you want to take
        console.log("motionstart");
    });

    // When no more motion is detected...
    motion.on("motionend", function() {
        // Display motionend in the console
        // HINT: Replace this with any action you want to take
        console.log("motionend");
    });
});