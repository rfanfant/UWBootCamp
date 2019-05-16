// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the node-geocoder and inquirer NPM packages
var NodeGeocoder = require("node-geocoder");
var inquirer = require("inquirer");
var weather = require("weather-js");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "GUjntNYA15OeM67pe6nu43tABm8rX2t4"
};

var geocoder = NodeGeocoder(options);


// Prompt the user to provide location information.
inquirer.prompt([

  {
    type: "input",
    name: "address",
    message: "Which location or landmark would you like to geocode?"
  }

// After the prompt, store the user's response in a variable called location.
]).then(function(location) {

  console.log(location.address);

  // Then use the Google Geocoder to Geocode the address
  geocoder.geocode(location.address, function(err, data) {
    console.log(JSON.stringify(data[0], null, 2));
  
    var address = data[0];
  
    // Depending on what information is available for an address, build formatted search
    var search = "";
  
    if (address.city) {
      search += address.city;
    }
  
    if (address.stateCode) {
      search += ", " + address.stateCode;
    }
  
    if (address.zipcode) {
      search += " " + address.zipcode;
    }
  
    if (address.countryCode) {
      search += " " + address.countryCode;
    }
    console.log("Address: ", search)
    // Run the weather package to search by either zip or city.
    weather.find({ search: "Basking Ridge, NJ 07920-2601 US", degreeType: "F" }, function(err, result) {
      // If there is insufficient data, notify the user.
      if (err) {
        console.log("\r\n\r\n\r\n");
  
        console.log("Sorry we don't have enough data on that location! Try somewhere else.");
  
        console.log("\r\n\r\n\r\n");
  
        return;
      }
  
      // Then print the Weather information and complete Address
      console.log("\n\r");
  
      console.log("Weather Forecast for: " + search);
  
      console.log("Current Temperature: " + result[0].current.temperature + "° F");
  
      console.log("Sky: " + result[0].current.skytext);
  
      console.log(
        "Tomorrow's Forecast: Low of " +
          result[0].forecast[1].low +
          "° F | High of " +
          result[0].forecast[1].high +
          "° F"
      );
  
      console.log("\r\n\r\n\r\n");
    });
  });

});
