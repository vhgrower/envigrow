var schedule = require('node-schedule');
var Trigger = require('./lib/relay');

var allRelays = [3, 5, 7, 8, 10, 11, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24, 26, 29, 31, 32, 33, 35, 36, 37, 38, 40];

Trigger(allRelays, true, comp);

function comp(){

  console.log("complete");
}