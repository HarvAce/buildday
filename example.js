// Setup dependencies
var five = require("johnny-five");
var Edison = require("edison-io");
var songs = require("j5-songs");

// Setup the Intel Edison
var board = new five.Board({
  io: new Edison()
});

// When the Intel Edison board is ready...
board.on("ready", function() {
    
    // Setup the LCD - Plug the LCD into any I2C port
    var lcd = new five.LCD({
        controller: "JHD1313M1"
    });
    
    // Setup the buzzer in digital port 6
    // HINT: You can plug the buzzer into any other digital port and change the number 6 below
    // HINT: If the buzzer ever starts to squeal, unplug the buzzer from the Intel Edison
    var buzzer = new five.Piezo(6);
    
    // Setup the button in digital port 2
    // HINT: You can plug the button into any other digital port and change the number 2 below
    var button = new five.Button(2);
    
    // Setup the rotary encoder in analog port A0
    // HINT: You can plug the rotary encoder into any other digital port and change the number 0 below
    var rotary = new five.Sensor("A0");
    
    // When the button is pressed...
    button.on("press", function(){
        
        // On the LCD, print <3 Hello Aasta <3 with a yellow background
        // NOTE: Ensure shield switch is set to 5V (if text is not printing, double check this switch)
        // HINT: Change to your name below
        lcd.useChar("heart");
        lcd.cursor(0,0).print(":heart: Hello Aasta :heart:");
        
        // Play a song
        // HINT: There are many different songs you can play
        var song = songs.load("mario-intro");
        buzzer.play(song);
        
    });
    
    // When the rotary encoder is turned...
    rotary.scale(0,255).on("change", function(){
        // Swap colors between red and blue
        lcd.bgColor(255-this.value, this.value, this.value);
    })
});