// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {

    // Setup the GPS
    var gps = new five.GPS({
        pins: {
            rx: 11,
        tx: 10,
        }
    });

    // When the position changes...
    gps.on("change", function() {
        // HINT: Replace this with any action you want to take
        console.log("position");
        console.log("  latitude   : ", this.latitude);
        console.log("  longitude  : ", this.longitude);
        console.log("  altitude   : ", this.altitude);
        console.log("--------------------------------------");
    });
  
    gps.on("navigation", function() {
        // HINT: Replace this with any action you want to take
        console.log("navigation");
        console.log("  speed   : ", this.speed);
        console.log("  course  : ", this.course);
        console.log("--------------------------------------");
    });
});