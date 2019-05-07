"use strict";

//JSX - Javascript extention provided to us by react

//create a title object
//title should have title property and subtitle property
//render template

//only render the subtitle(and ptag) if subtitle exist - Logical and operator
//render new p tag - if option.length >8 "Here are your options" "No options"

//if statements
//ternary operators
//logical and operators
var app = {
  title: "Amazing",
  subtitle: "indecision app",
  options: ['One', 'two']
};

function getOptions(option) {
  if (option.length >= 2) {
    return React.createElement(
      "p",
      null,
      "Here are your ",
      option
    );
  }
}
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title && React.createElement(
      "p",
      null,
      " title: ",
      app.title
    )
  ),
  React.createElement(
    "h1",
    null,
    app.subtitle ? app.subtitle : 'No subs'
  ),
  getOptions(app.options)
);

var user = {
  // name: 'Wale Olakareem',
  age: 26,
  location: 'San Francisco'
};
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    "p",
    null,
    "Age:",
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
