import Card from './components/Card.js'
import './assets/Card.css';
import Header from "./components/Header.js";

function App() {
  return (
    <div>
    <meta charSet="UTF-8" />
    <title>Document</title>
    <link rel="stylesheet" href="../assets/homePage.css" type="text/css" />
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
