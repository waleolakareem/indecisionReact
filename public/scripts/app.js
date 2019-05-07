"use strict";

//JSX - Javascript extention provided to us by react

//create a title object
//title should have title property and subtitle property
//render template


//if statements
//ternary operators
//logical and operators
var title = {
  title: "Amazing",
  subtitle: "indecision app"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    title.title
  ),
  React.createElement(
    "h1",
    null,
    title.subtitle
  )
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
  React.createElement(
    "p",
    null,
    "Age:26"
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
