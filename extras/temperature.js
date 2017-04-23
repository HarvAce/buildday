// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison is ready...
board.on("ready", function() {

    // Setup the temperature sensor in analog port 0
    // HINT: You can plug the temperature sensor into any other analog port and change the number 0 below
    var thermometer = new five.Thermometer({
        controller: "GROVE",
        pin: "A0"
    });

    /// Setup the LCD - Plug the LCD into any I2C port
    var lcd = new five.LCD({
        controller: "JHD1313M1"
    });

    var f = 0;

    // Read the thermometer...
    thermometer.on("data", function() {

        // Format the temperature for the LCD
        if (f === Math.round(this.fahrenheit)) {
        return;
        }
        f = Math.round(this.fahrenheit);

        // Determine what color to make the LCD
        // Hot -> Warm: Red -> Yellow
        // Moderate: Green
        // Cool -> Cold: Blue -> Violet
        var r = linear(0x00, 0xFF, f, 100);
        var g = linear(0x00, 0x00, f, 100);
        var b = linear(0xFF, 0x00, f, 100);

        // Display the temperature and update the background color on the LCD
        lcd.bgColor(r, g, b).cursor(0, 0).print(f);
    });
});

// linear interpolation
function linear(start, end, step, steps) {
  return (end - start) * step / steps + start;
}