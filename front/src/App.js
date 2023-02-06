import Card from './components/Card.js'
import './assets/Card.css';
import  Header  from "./components/Header.js";

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
    <Card title= "test"> </Card> 
    <Card/>
</body>
</div>

  );
}

export default App;
