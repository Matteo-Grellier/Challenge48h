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
            <a href="#http://localhost:3000/#">Data dingos</a>
          </li>
          <li id="login">
            <a>Login/Inscription</a>
            <ul className="subnav">
              <li>
                <a
                  href="#"
                  value="Login"
                  onClick={() => setShowPopup(!showPopup)}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#inscription"
                  onClick={() => setShowSecondPop(!ShowSecondPop)}
                >
                  Register
                </a>
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
            <input
              type="button"
              className="buttonInPopUp"
              value="Close"
              onClick={() => setShowPopup(!showPopup)}
            />
            <div className="content">
              <form action="Header.js" method="get">
                Mail:
                <br></br>
                <input
                  type="email"
                  id="email"
                  pattern=".+@globex\.com"
                  size="30"
                  required
                />{" "}
                <br></br>
                <label for="pass">Password:</label>
                <br></br>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minlength="8"
                  required
                />
                <br></br>
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
            <br></br>
            <input
              type="button"
              className="buttonInPopUp"
              value="Fermer"
              onClick={() => setShowSecondPop(!ShowSecondPop)}
            />
            <div className="content">
              <form action="Header.js" method="get">
                Full Name :
                <input type="text" name="Name" />
                <br></br>
                <br></br>
                Mail
                <br></br>
                <input
                  type="email"
                  id="email"
                  pattern=".+@globex\.com"
                  size="30"
                  required
                />{" "}
                <br></br>
                <br></br>
                <label for="pass">Password (8 characters minimum):</label>{" "}
                <br></br>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minlength="8"
                  required
                />
                <br></br>
                <br></br>
                <label for="pass">Retype Password:</label>{" "}
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minlength="8"
                  required
                />
                <br></br>
                <br></br>
                Coutry code :<br></br>
                <input type="text" name="Countrie" />
                <br></br>
                <br></br>
                Adress :<br></br>
                <input type="text" name="Adress" />
                <br></br>
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
