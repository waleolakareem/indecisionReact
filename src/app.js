//JSX - Javascript extention provided to us by react

//create a title object
//title should have title property and subtitle property
//render template


//if statements
//ternary operators
//logical and operators
var title = {
  title:"Amazing",
  subtitle : "indecision app"
}
var template = (
  <div>
    <h1>{title.title}</h1>
    <h1>{title.subtitle}</h1>
  </div>
)

var user = {
  // name: 'Wale Olakareem',
  age: 26,
  location: 'San Francisco'
}
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}

var template2 = (
  <div>
    <h1>
      {user.name ? user.name : 'Anonymous'}
    </h1>
    <p>
      Age:26
    </p>
      {getLocation(user.location)}

  </div>
)
var appRoot = document.getElementById('app');


ReactDOM.render(template2, appRoot)
