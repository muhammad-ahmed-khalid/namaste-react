import React from "react";
import ReactDOM from "react-dom";

console.log("Aoooo");

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "header" }, [
        React.createElement("div", {id: "logo"}, 
        React.createElement("p", {}, "Logo"),
        ),
        React.createElement("div", {id: "nav"}, 
        React.createElement("p", {}, "this is navigation"),
        ),
      ]),
  React.createElement("div", { id: "innerBanner" }, [
    React.createElement("h1", {}, "Hello Friend Chai pelo"),
  ]),
  React.createElement("div", { id: "innerWrapper" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "This is heading"),
      React.createElement("h2", {}, "h2 hy yeh"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "This is heading"),
      React.createElement("h2", {}, "h2 hy yeh"),
    ]),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
