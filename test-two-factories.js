/*
 * test-factory.js
 */

var factoryX = require("./counter-factory");
var factoryY = require("./counter-factory");

var counterA = factoryX.create();
var counterB = factoryX.create();
var counterC = factoryY.create();
var counterD = factoryY.create();

for( var i = 0; i < 5;  i++ ) {
    console.log( "Counters: %s, %s, %s, %s", 
        counterA.step(),
        counterB.step(), 
        counterC.step(),
        counterD.step());
}