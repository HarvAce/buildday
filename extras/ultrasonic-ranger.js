// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {
    
    // Setup the ultrasonic ranger in digital port 6
    // HINT: You can plug the ultrasonic ranger into any other digital port and change the number 6 below
    var proximity = new five.Proximity({
        controller: "HCSR04",
        pin: 6
    });

    // When the distance changes...
    proximity.on("change", function() {
        // Display the distance away from the object in the console
        // HINT: Replace this with any action you want to take
        console.log("Proximity (in): ", this.in);
    });
});