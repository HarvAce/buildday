// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {

    // Setup the moisture sensor in analog port A0
    // HINT: You can plug the moisture sensor into any other analog port and change the number 0 below
    var moisture = new five.Sensor("A0");

    // When moisture is detected...
    moisture.scale(0, 100).on("change", function() {
        // 0 - Dry
        // 50 - Wet
        
        // If a higher level of moisture is detected...
        if (this.value < 20) {
            // Display happy plant in the console
            console.log("happy plant")
        } else {
            // Display sad plant in the console
            console.log("sad plant")
        }
    });
});