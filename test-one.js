/*
 * test-one.js
 */

var counterA = require("./counter");

for( var i = 0; i < 5;  i++ ) {
    console.log( "Counter A: %s", 
        counterA.step());
}
