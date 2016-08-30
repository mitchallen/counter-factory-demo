/*
 * test-two.js
 */

var counterA = require("./counter");
var counterB = require("./counter");

for( var i = 0; i < 5;  i++ ) {
    console.log( "Counter A: %s, Counter B: %s", 
        counterA.step(), 
        counterB.step());
}
