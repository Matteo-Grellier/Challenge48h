import React from 'react';
import Card from './Card.js'
import Header from './header.js';
import '../assets/Basket.css'
import Home from '../assets/Pages/Home.js';



function Basket(PorductName, PriceProduct, LinkImage) {
    PorductName = "test";
    PriceProduct = "10";
    LinkImage =
      "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg";
    let Quantity="14";
    return (
      <>
        <Header></Header>
        {/* <h2>
          <b>Your bag : </b>
        </h2> */}
            <br></br>
        <div className="finalCard">
          <h4>all-total (0 articles ): 000 $</h4>
          <button id="purchaseButton" type="submit" class="acceptbutton">
            <b>Passer commande</b>
          </button>
        </div>

        <div class="card1">
          <img src={LinkImage} style={{ width: "30%" }} />
            <div class="firstRow" type="row">
              <p>{PorductName}</p>
              <div class="Price">{PriceProduct}</div>
              <p>
                Quantity: <input id="number" type="number" max="100" />{" "}
              </p>
              <input class="Delete" type="reset" value="Delete" />
            </div>
        </div>
      </>
    );
}

export default Basket;