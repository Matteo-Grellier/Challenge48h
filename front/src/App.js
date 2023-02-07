 import Card from './components/Card.js'
import Header from "./components/Header.js";
import Shop from "./components/shop.js";
function App() {
  return ( 
    <div>
   <header>
      <meta charSet="UTF-8" />
      <title>Data Dingos</title>
      <link rel="stylesheet" href="../assets/homePage.css" type="text/css" />
        <Header></Header>
  </header>
  <body>
        
 <Card Name = "test" > </Card>  
        <Card /> 
        <Card />
       {/* <Shop></Shop>         */}
      </body>
   </div>
    
  );
}

export default App;
