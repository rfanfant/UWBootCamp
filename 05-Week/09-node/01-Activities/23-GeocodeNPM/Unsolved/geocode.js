// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "GUjntNYA15OeM67pe6nu43tABm8rX2t4"
};

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);

// Format the address using process.argv
// var arg = process.argv;

// // Build your address as an array or string
// var address = '';

// for (let i = 2; i < arg.length; i++) {
//     address += arg[i] + " "
// }

var address = process.argv.slice(2).join(" ");

console.log(address);

// Then use the geocoder object to search the address
geocoder.geocode(address, function(err, res) {
  if(err){
    return console.log(err);
  }
  console.log(res);
});