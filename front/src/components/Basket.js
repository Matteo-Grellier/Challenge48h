import React from 'react';
import Card from './Card.js'
import '../assets/Card.css';
import Header from './header.js';
import '../assets/Basket.css'
import '../assets/Header.css'
import Home from '../assets/Pages/Home.js';



function Basket(){
    return (
        <>
        <Header></Header>
        <h2><b>Votre panier : </b></h2>
        <div className="finalCard">
        <h4>Sous-total (0 articles): 000 €</h4>
        <button id="purchaseButton" type="submit" class= "acceptbutton"><b>Passer commande</b></button>
        </div>
        <Card id="card1"></Card>
        </>
   );
}

export default Basket;