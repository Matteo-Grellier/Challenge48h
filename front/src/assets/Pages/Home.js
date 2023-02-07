
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
        <div className="content">
          <div className="contentcard">
            <Card
              link="https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F9b5f382c-7a2a-48e1-bb0c-59d3a3b2924f.2Ejpeg/2048x1536/quality/80/philippe-etchebest.jpeg"
              title="Filou"
              price="3$"
              sellerName="Lui meme"
            />
            <Card
              link="https://www.ynov-nantes.com/app/uploads/2019/10/3-3.jpg"
              price="1$"
              title="Ynov"
              sellerName="Julien"
            />
            <Card
              link=" https://wtvr.games/assets/Picture_JS.jpg"
              title="NOTRE JULIEN OFFICIEL"
              price="50000000$"
              sellerName="YNOV"
            />
            <Card
              link="https://cdn.cultura.com/cdn-cgi/image/width=768/media/pim/sw-tbd-ip-lsw7-2021-5702016913965_0.jpg"
              title="Kiwi"
              price="3$"
              sellerName="Bob Michael"
            />
            <Card
              link="https://m.media-amazon.com/images/I/5162XIhsbOL._AC_SY355_.jpg"
              title="un sac"
              price="3$"
              sellerName="Bob Michael"
            />
            <Card
              link="https://www.club-shop.fr/40872-large_default/ballon-de-football-adidas-tiro-club.jpg"
              title="Kiwi"
              price="3$"
              sellerName="Bob Michael"
            />
            <Card
              link="https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"
              title="Kiwi"
              price="3$"
              sellerName="Bob Michael"
            />
            <Card
              link="https://www.alimentarium.org/sites/default/files/media/image/2016-10/AL012-06%20clementine_0.jpg"
              title="Kiwi"
              price="3$"
              sellerName="Bob Michael"
            />
            <Card
              link="https://www.bigcitylife.fr/wp-content/uploads/2018/11/tacos.jpg"
              title="Kiwi"
              price="3$"
              sellerName="Bob Michael"
            />
            <Card
              link="https://www.telez.fr/content/uploads/2020/02/philippe-etchebest-1280x720.jpg"
              title="Etchbetche"
              price="500$"
              sellerName="Cauchemard en cuisine"
            />
            <Card
              link="https://www.cdiscount.com/pdt2/8/1/9/1/700x700/mp45006819/rw/winice-velo-electrique-de-montagne-26-velo-vtt-h.jpg"
              title="Un vélo"
              price="150$"
              sellerName="Cdiscount"
            />
            <Card
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
