// Include dependencies
var five = require("johnny-five");
var Edison = require("edison-io");

// Setup the Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison board is ready...
board.on("ready", function() {

    // Plug the rotary angle encoder into analog port 0 on the Intel Edison Grove Shield
    // HINT: You can plug the rotary angle encoder into any other analog port and change the number 0 below
    var rotary = new five.Sensor("A0");
    
    // Setup the LCD - Plug the LCD into any I2C port
    var lcd = new five.LCD({
        controller: "JHD1313M1"
    });
    
    // Calculate the color of the LCD (red or violet)
    rotary.scale(0,255).on("change", function(){
        var r = linear(0xFF, 0x4B, this.value, 0xFF);
        var g = linear(0x00, 0x00, this.value, 0xFF);
        var b = linear(0x00, 0x82, this.value, 0xFF);
        lcd.bgColor(r,g,b);
    })
  
});

// Function for linear interpolation
function linear(start, end, step, steps){
    return (end - start) * step / steps + start;
}