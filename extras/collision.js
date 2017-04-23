// Setup dependencies
var collision = require("jsupm_collision");

// Setup the collision sensor in digital port 6
// HINT: You can plug the collision sensor into any other digital port and change the number 6 below
var sensor = new collision.Collision(6);

// Setup the default that there is no collision
var collisionState = false;
console.log("No collision");

// Check for a collision every 1 millisecond
var myInterval = setInterval(function()
{
    // When a collision is detected...
	if (sensor.isColliding() && !collisionState)
	{
        // Display collision in the console
        // HINT: Replace this with any action you want to take
		console.log("collision");
		collisionState = true;
	}
    // When there is no collision detected...
	else if (!sensor.isColliding() && collisionState)
	{
        // Display no collision in the console
        // HINT: Replace this with any action you want to take
		console.log("no collision");
		collisionState = false;
	}
}, 1);

// Stop the interval when you stop the program
process.on('SIGINT', function()
{
	clearInterval(myInterval);
	sensor = null;
	collision.cleanUp();
	collision = null;
	process.exit(0);
});