// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {
    
    // Setup the relay in digital port 10
    // HINT: You can plug the relay into any other digital port and change the number 10 below
    var relay = new five.Relay(10);
    
    // Turn the relay on
    relay.on();
    
    // Turn the relay off
    relay.off();

});