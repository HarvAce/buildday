// Setup dependencies
var sensorObj = require('jsupm_nmea_gps');

// Setup the GPS in the UART port (D1)
var sensor = new sensorObj.NMEAGPS(0, 9600, 3);

// Continuously read GPS sensor data, displaying it all in the console
// There are many different GPS codes - you can copy them from the console and interpret them at https://rl.se/gprmc
// Try to focus on the $GPGGA code - it will give you current location
// National Marine Electronics Association (NMEA) standard codes:
//      $GPGSA - GPS dilution of precision and active satellites
//      $GPGSV - GPS satellites in view
//      $GPRMC - recommended minimum specific GPS/transit data
//      $GPGGA - GPS fix data (current location)
while (sensor.dataAvailable(5000))
{
    // HINT: Replace this with any action you want to take
    process.stdout.write(sensor.readStr(256));
}
console.log("Timed out");

// Stop reading GPS data when you stop the program
process.on('SIGINT', function()
{
    sensor = null;
    sensorObj.cleanUp();
    sensorObj = null;
    process.exit(0);
});