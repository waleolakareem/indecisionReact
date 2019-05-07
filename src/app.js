//JSX - Javascript extention provided to us by react

//create a title object
//title should have title property and subtitle property
//render template

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

var template2 = (
  <div>
    <h1>
      Oladejo Olakareem
    </h1>
    <p>
      Age:26
    </p>
    <p>
      Location: Philadepia
    </p>
  </div>
)
var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot)
