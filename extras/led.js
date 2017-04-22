// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {

    // Setup the LED in digital port 6
    // HINT: You can plug the LED into any other digital port and change the number 6 below
    var led = new five.Led(6);

    // Blink the LED every 500 milliseconds
    // HINT: You can change 500 to a smaller number to make the LED blink faster and to a larger number to make it blink slower
    led.blink(500);
});