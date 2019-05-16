// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7001;

// Create a generic function to handle requests and responses
function handleRequest1(request1, response1) {

  // Send the below string to the client when the user visits the PORT URL
  response1.end("Server 1 !! Path Hit: " + request1.url);
}


// Create a generic function to handle requests and responses
function handleRequest2(request2, response2) {

    // Send the below string to the client when the user visits the PORT URL
    response2.end("Server 2 !! Path Hit: " + request2.url);
  }
  

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);


// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server1 listening on: http://localhost:" + PORT1);
});

// Start our server so that it can begin listening to client requests.
server2.listen(PORT2, function() {

    // Log (server-side) when our server has started
    console.log("Server2 listening on: http://localhost:" + PORT2);
});
