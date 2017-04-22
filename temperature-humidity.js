// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison board is ready
board.on("ready", function() {

    // Setup the temperature & humidity sensor - Plug the temperature & humity sensor into any I2C port
    // HINT: Frequency determines how often the temperature and humidity are collected
    var multi = new five.Multi({
        controller: "TH02",
        freq: 10000
    });

    // When the temperature or humidity change...
    multi.on("change", function() {
        // Display the temperature in the console
        console.log("Temperature (F): ", this.thermometer.fahrenheit);
    
        // Display the humidity in the console
        console.log("Relative humidity : ", this.hygrometer.relativeHumidity);
  });
});