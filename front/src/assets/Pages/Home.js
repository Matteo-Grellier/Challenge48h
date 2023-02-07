import '../home.css'
import Card from "../../components/Card.js";
import Header from "../../components/header.js";
import React, { Component } from 'react';
import '../Card.css';


function Home() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <title>Data dingos</title>
      <header>
        <Header></Header>
      </header>
      <body>
        {" "}
        <div className="content">
          <div className="contentcard">
            <Card
              id="1"
              link="https://www.visazero.com/28873-large_default/voiture-telecommandee-transformers-jouet-pour-enfants.jpg"
              title="Toys"
              price="10$"
              id="Toys"
              sellerName="Sold by: VisaZero"
            />
            <Card
              id="2"
              link="https://www.club-shop.fr/52111-large_default/ballon-de-football-uhlsport-team-2022.jpg"
              price="25$"
              id="Toys"
              title="Football"
              sellerName="Sold by:Uhlsport"
            />
            <Card
              id="3"
              link=" https://wtvr.games/assets/Picture_JS.jpg"
              title="NOTRE JULIEN OFFICIEL"
              price="50000000$"
              id="unique"
              sellerName="Sold by:YNOV"
            />
            <Card
              id="4"
              link="https://www.challenges.fr/assets/img/2018/08/27/cover-r4x3w1000-5b84072224873-pbc18-conference-09-jpg.jpg"
              title="Car"
              price="3$"
              id="car"
              sellerName="Sold by: you"
            />
            <Card
              id="5"
              link="https://www.avenuedelabrique.com/img/produits/21318/thumbs/21318-la-cabane-dans-l-arbre-3-1563954235_1000x0.jpg"
              title="Lego"
              price="34$"
              id="toys"
              sellerName="Sold by:Lego"
            />
            <Card
              id="6"
              link="https://www.club-shop.fr/40872-large_default/ballon-de-football-adidas-tiro-club.jpg"
              title="adidas Ball"
              id="car"
              price="35$"
              sellerName="Sold by:Addidas"
            />
            <Card
              id="7"
              link="https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"
              title="Kiwi"
              price="3$"
              id="food"
              sellerName="Sold by:Bob Michael"
            />
            <Card
              id="8"
              link="https://www.alimentarium.org/sites/default/files/media/image/2016-10/AL012-06%20clementine_0.jpg"
              title="clementine"
              price="3$"
              sellerName="Sold by: Bob Michael"
            />
            <Card
              id="9"
              link="https://www.bigcitylife.fr/wp-content/uploads/2018/11/tacos.jpg"
              title="Tacos"
              price="10$"
              sellerName="Sold by: Otacos"
            />
            <Card
              id="10"
              link="https://www.telez.fr/content/uploads/2020/02/philippe-etchebest-1280x720.jpg"
              title="Etchbetche"
              price="500$"
              sellerName="Cauchemard en cuisine"
            />
            <Card
            id="11"
              link="https://www.cdiscount.com/pdt2/8/1/9/1/700x700/mp45006819/rw/winice-velo-electrique-de-montagne-26-velo-vtt-h.jpg"
              title="Un vélo"
              price="150$"
              sellerName="Cdiscount"
            />
            <Card
            id="12"
              link="https://4l-buru-74.webself.net/file/si15757/4l-clan-fi277342x470.jpeg"
              title="Une 4l"
              price="25$"
              sellerName="Renaud"
            />
          </div>
        </div>
      </body>
    </div>
  );
}

export default Home;
