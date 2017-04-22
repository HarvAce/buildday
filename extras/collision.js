// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {

    // Setup the collision sensor in digital port 6
    // HINT: You can plug the collision sensor into any other digital port and change the number 6 below
    var sensor = new five.Sensor("6");

    // When the sensor value changes...
    sensor.on("change", function(value) {
        // Display the value in the console
        // HINT: Replace this with any action you want to take
        console.log(value);
    });
});