/*
 * test-factory.js
 */

var factory = require("./counter-factory");

var counterA = factory.create();
var counterB = factory.create();

for( var i = 0; i < 5;  i++ ) {
    console.log( "Counter A: %s, Counter B: %s", 
        counterA.step(), 
        counterB.step());
}