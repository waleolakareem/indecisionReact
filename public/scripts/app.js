"use strict";

//JSX - Javascript extention provided to us by react

//create a title object
//title should have title property and subtitle property
//render template

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

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Oladejo Olakareem"
  ),
  React.createElement(
    "p",
    null,
    "Age:26"
  ),
  React.createElement(
    "p",
    null,
    "Location: Philadepia"
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
