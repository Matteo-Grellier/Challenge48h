import Card from './components/Card.js'
import Header from "./components/header.js";
import  './assets/Card.css' ;
import Shop from "./components/shop.js";
function App() {
  return ( 
    <div>
    <meta charSet="UTF-8" />
    <title>Data dingos</title>
    <header>
    <Header></Header>
    </header>
    <body>
    <div className="content">
    <div className="contentcard">
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    <Card title= "Kiwi" price="3$" sellerName="Bob Michael"/>
    </div>
    </div>
    </body>
    </div>
    
    );
  }
  
  export default App;
