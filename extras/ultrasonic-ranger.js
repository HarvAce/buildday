// Setup dependencies
var ultrasonic = require("jsupm_groveultrasonic");

// Setup the ultrasonic ranger in digital port 6
// HINT: You can plug the ultrasonic ranger into any other digital port and change the number 6 below
var sensor = new ultrasonic.GroveUltraSonic(6);

// Every 200 milliseconds...
// HINT: You can put a small number than 200 to make this run faster, or a larger number than 200 to make this run slower
var myInterval = setInterval(function()
{
    // Calculate the distance away from an object
    var travelTime = sensor.getDistance();
    if (travelTime > 0) {
        var distance = (travelTime / 29 / 2 * 0.39370).toFixed(3);
        
        // Display the distance away from an object in the console
        // HINT: Replace this with any action you want to take
        console.log("distance (in): " + distance);
    }
}, 200);

// Stop the interval when you stop the program
process.on('SIGINT', function()
{
  clearInterval(myInterval);
  process.exit(0);
});