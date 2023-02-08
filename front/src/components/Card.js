import React, { Component } from "react";
import "../assets/Card.css"

function Card({ link, title, price, sellerName, type }) {
    return (
    <div className="card">
      <img src={link} style={{ width: "91%" }}
      />
      <div className="container">
        <h4>
        <b>{title}</b>
        </h4>
        <p>
        <b>{price}</b>
        </p>
        <p>{sellerName}</p>
        <button id="button">+ order</button>
        </div>
        </div>
        );
    }
    
    export default Card;
