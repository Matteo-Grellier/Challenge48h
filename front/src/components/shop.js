import Header from './Header.js';
import '../assets/Shop.css'
function Shop() {
    return (
      <body>
        <meta charSet="UTF-8" />
        <title>Document</title>
        <link rel="stylesheet" href="../assets/Shop.css" type="text/css" />
        <header>
          <Header></Header>
        </header>
        <div class="container">
          <p id="name">Nom du Produit</p>
          <div class="image">
            <img src="https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?cs=srgb&dl=pexels-pixabay-51312.jpg&fm=jpg"style={{ width: "30%" }}/>
          </div>
          <div class="Info">
                    <p>Nombre de vente <br></br>
                         x
                    </p>
                    <br></br>
                    Price<input type="number" id="price" min="0" max ="100" />
                    <br></br>
           Add content <input type="number"id="add"min="0" max ="100"/>
          </div>
        </div>
      </body>
    );
}
export default Shop;
 