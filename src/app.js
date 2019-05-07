//JSX - Javascript extention provided to us by react

//create a title object
//title should have title property and subtitle property
//render template

//only render the subtitle(and ptag) if subtitle exist - Logical and operator
//render new p tag - if option.length >8 "Here are your options" "No options"

//if statements
//ternary operators
//logical and operators
const app = {
  title:"Amazing",
  subtitle : "indecision app",
  options: ['One','two']
}

function getOptions(option) {
  if (option.length >= 2) {
    return  <p>Here are your {option}</p>
  }
}
const template = (
  <div>
    <h1>{app.title && <p> title: {app.title}</p>}</h1>
    <h1>{app.subtitle ? app.subtitle : 'No subs'}</h1>
    {getOptions(app.options)}
  </div>
)

const user = {
  name: 'Wale Olakareem',
  age: 26,
  location: 'San Francisco'
}
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}

const template2 = (
  <div>
    <h1>
      {user.name ? user.name : 'Anonymous'}
    </h1>
      {user.age >= 18 && <p>Age:{user.age}</p>}
      {getLocation(user.location)}

  </div>
)
const appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot)
