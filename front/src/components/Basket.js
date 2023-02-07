import React from 'react';
import Card from './Card.js'
//import '../assets/Card.css';
import Header from './header.js';
import '../assets/Basket.css'
import Home from '../assets/Pages/Home.js';



function Basket(Name, Price) {
    Name="test";
    Price="10"
    let Quantity="14";
    return (
      <>
        <Header></Header>
        <h2>
          <b>Your bag : </b>
        </h2>
        <div className="finalCard">
          <h4>all-total (0 articles ): 000 $</h4>
          <button id="purchaseButton" type="submit" class="acceptbutton">
            <b>Passer commande</b>
          </button>
        </div>
        <div class="card1">
            <div class="card2">
                <div class="firstRow" type="row">
                <p>{Name}</p> 
                <div class="Price">{Price}</div>
            </div>
            <br></br>
            <br></br>
            <p>Quantity: <input id="number" type="number" max="100"/> </p>
              <input class="Delete" type="reset" value="Delete"/>
        </div>
                </div>

      </>
    );
}

export default Basket;