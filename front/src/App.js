// import Card from './components/Card.js'
//import './assets/Card.css';
import Header from "./components/Header.js";
import Shop from "./components/shop.js";
function App() {
  return ( 
    <div>
   <header>
      <meta charSet="UTF-8" />
      <title>Document</title>
      <link rel="stylesheet" href="../assets/homePage.css" type="text/css" />
        <Header></Header>
  </header>
  <body>
        

    {/* <Card title= "test"> </Card> 
        <Card /> */}
        <Shop></Shop>       
</body>
</div>
  );
}

export default App;
