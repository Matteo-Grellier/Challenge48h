var NewComponent = React.createClass({
render: function() {
return (
<div>
  <meta charSet="UTF-8" />
  <title>Document</title>
  <link rel="stylesheet" href="../assets/homePage.css" type="text/css" />
  <header>
  </header>
  <div className="card1">
    <img
      src="https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?cs=srgb&dl=pexels-pixabay-51312.jpg&fm=jpg"
      alt="Avatar" style={{width: '100%' }} />
    <div className="container">
      <h4><b>prix</b></h4>
      <p>nom du vendeur</p>
    </div>
  </div>
</div>
);
}
});