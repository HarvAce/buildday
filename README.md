Intel Edison Build Day Demos
===========================================

These are demos of every Intel Edison Internet of Things Grove kit sensor for use during build days.  All examples are written in Node.js.

Copy all of these files into your buildday folder that the Intel XDK project created.  If you called your project something other than buildday, copy into that folder instead.

Sensor Examples
------------

In every kit
* Motion Sensor
* Ultraviolet Light Sensor
* Moisture Sensor
* Temperature & Humidity Sensor
* Light Sensor
* LCD
* Buzzer
* Button
* Servo Motor
* Relay
* Rotary Angle Encoder

Extras to share across kits
* Accelerometer
* Collision Sensor
* GPS
* LED (blue, red, and green)
* Sound Sensor
* Temperature Sensor
* Touch Sensor
* Ultrasonic Ranger
* Vibration Sensor

Startup File
-------------------

Copy any code that you wish to run into this file.

* main.js

Full Demo File
-------------------

Use this as a demonstration of how four different components can work together.  It creates an LCD screen with your name, color changing backgrounds with the rotary angle encoder, and buzzer sound when pressing the button.

* example.js

Dependencies
-------------------

* johnny-five
* j5-songs
* edison-io
* jsupm_groveultrasonic - for ultrasonic ranger sensor only
* jsupm_collision - for collision sensor only
* jsupm_nmea_gps - for GPS only