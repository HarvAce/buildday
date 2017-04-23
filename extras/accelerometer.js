// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {

    // Plug the accelerometer into any I2C port
    var acceleration = new five.Accelerometer({
        controller: "MMA7660"
    });

    // When movement occurs...
    acceleration.on("change", function() {
        // HINT: Replace this with any action you want to take
        console.log("accelerometer");
        console.log("  x            : ", this.x);
        console.log("  y            : ", this.y);
        console.log("  z            : ", this.z);
        console.log("  pitch        : ", this.pitch);
        console.log("  roll         : ", this.roll);
        console.log("  acceleration : ", this.acceleration);
        console.log("  inclination  : ", this.inclination);
        console.log("  orientation  : ", this.orientation);
        console.log("--------------------------------------");
    });
});