import React from "react";

const name = "arron";
const num1 = 1;

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name} </h1>
          <h2>My name has {num1} letters</h2>
          <h2>I think React {"is amazing"} </h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
