// $ npm install johnny-five

var five = require("johnny-five"),
    board = new five.Board({ port: "COM8" });

board.on("ready", function() {
    var led = new five.Led(13);
    // Strobe the pin on/off, defaults to 100ms phases
    led.strobe();

});