// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operand/:num1/:num2", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  let operand = req.params.operand;
  let num1 =  req.params.num1;
  let num2 =  req.params.num2;
  
  // Initialize the result variable to send later
  var result = 0;

  // Switch statement chooses operation based on the operation parameter.
  switch (operand) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
    // Add your logic here. Pun intended.
    result = parseInt(num1) + parseInt(num2);
    break;
  case "subtract":
    // Subtract logic
    result = parseInt(num1) - parseInt(num2);
    break;
  case "multiply":
    // Multiply
    result = parseInt(num1) * parseInt(num2);
    break;
  case "divide":
    // Divide
    result = parseInt(num1) / parseInt(num2);
    break;
  default:
    // Handle anything that isn't specified
    result = res.json(result);
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }
  // We return the result back to the user in the form of a string
  res.send(result.toString());
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function(app) {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
