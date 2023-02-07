import Card from './components/Card.js'
import Header from "./components/header.js";
import  './assets/Card.css' ;
import Shop from "./components/shop.js";
function App() {
  return ( 
    <div>
    <meta charSet="UTF-8" />
    <title>Document</title>
    <header>
    <Header></Header>
    </header>
    <body>
    
    <div className="content">
    <div className="contentcard">
    <Card title= "test" price="125" sellerName="Bob"/>
    <Card title= "test" price="15" sellerName="Bob"/>
    <Card title= "test" price="125" sellerName="Bob"/>
    <Card title= "test" price="125" sellerName="Bob"/>
    <Card title= "test" price="125" sellerName="Bob"/>
    <Card title= "test" price="125" sellerName="Bob"/>
    <Card title= "test" price="125" sellerName="Bob"/>
    <Card title= "test" price="125" sellerName="Bob"/>
    <Card title= "test" price="125" sellerName="Bob"/>
    <Card title= "test" price="125" sellerName="Bob"/>
    <Card title= "test" price="125" sellerName="Bob"/>
    <Card title= "test" price="125" sellerName="Bob"/>
    </div>
    </div>
    </body>
    </div>
    
    );
  }
  
  export default App;
