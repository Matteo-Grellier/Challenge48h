import React, { useState } from "react";
import "../assets/Header.css";

function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [ShowSecondPop, setShowSecondPop] = useState(false);
  return (
    <div className="Header" id="container">
      <header className="Header-header">
        <ul className="nav">
          <li id="home">
            <a href="#">
              <img src="settings.png" />
            </a>
          </li>
          <li id="login">
            <a>Login/Inscription</a>
            <ul className="subnav">
              <li> <a href="#"value="Login"onClick={() => setShowPopup(!showPopup)}>Login</a>
              </li>
              <li>
                <a href="#inscription"onClick={() => setShowSecondPop(!ShowSecondPop)}>Register</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      {showPopup && (
        <div id="popupdiv">
          <div
            className="backgroundPopUp"
            onClick={() => setShowPopup(!showPopup)}
          ></div>
          <div className="contentPopUp">
            <input type="button"className="buttonInPopUp"value="Fermer"onClick={() => setShowPopup(!showPopup)} />
            <div className="content">
              <form action="Header.js" method="get">
                <br></br>
                Mail <br></br>
                <input type="email"id="email"pattern=".+@globex\.com"size="30"required />{" "}
                <br></br>
                <label for="pass">Password:</label> <br />
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minlength="8"
                  required
                />
                <br />
                <input type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </div>
      )}
      {ShowSecondPop && (
        <div id="popupdiv">
          <div
            className="backgroundPopUp"
            onClick={() => setShowSecondPop(!ShowSecondPop)}
          ></div>
          <div className="contentPopUp">
            <input
              type="button"
              className="buttonInPopUp"
              value="Fermer"
              onClick={() => setShowSecondPop(!ShowSecondPop)}
            />
            <div className="content">
              <form action="Header.js" method="get">
                Full Name : <br></br>
                <input type="text" name="Name" />
                <br></br>
                Mail <br></br>
                <input type="email"id="email"pattern=".+@globex\.com"size="30"required/>{" "}
                <br></br>
                <label for="pass">Password (8 characters minimum):</label>{" "}
                <br />
                <input type="password"id="pass"name="password"minlength="8"required/>
                <br />
                Coutry code : <br></br>
                <input type="text" name="Countrie" /> <br></br>
                Adress : <br></br>
                <input type="text" name="Adress" /> <br></br>
                <input type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
