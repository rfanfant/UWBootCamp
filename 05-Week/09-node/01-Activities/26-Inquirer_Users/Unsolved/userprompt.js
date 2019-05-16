// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================


// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
function runPrompt() {
  inquirer
    .prompt([
      // Here we create a basic text prompt.
      {
        type: "input",
        message: "What is your name?",
        name: "username"
      },
      // Here we create a basic password-protected text prompt.
      {
        type: "password",
        message: "Set your password",
        name: "password",
        validate: function (input) {
          if (input.length < 6) {
            console.log("Enter a valid password")
            return false;
          }
          return true;
        }
      },
      // Here we give the user a list to choose from.
      {
        type: "checkbox",
        message: "What type of cuisine is your favorite?",
        choices: [{
          name: 'Asian',
          value: 'Asian',
        }, {
          name: 'Italian',
          value: 'Italian',
        }, {
          name: 'American',
          value: 'American',
        }],
        name: "cuisine"
      },
      // Here we ask the user to confirm.
      {
        type: "input",
        message: "What kind of food from that cuisine do you like?",
        name: "type"
      },
      {
        type: "confirm",
        message: "Are you sure?",
        name: "confirm"
      },
    ])
    .then(function (response) {
      // If the response confirms, we displays the response's username and pokemon from the answers.
      // console.log("RESPONSE: ", response);
      if (response.confirm) {
        console.log(response)
      }
      else {
        runPrompt();
      }
    });

}

runPrompt()