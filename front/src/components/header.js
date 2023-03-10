import React, { useState } from "react";
import "../assets/Header.css";
//import Basket from "./components/Basket.js";

 function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [ShowSecondPop, setShowSecondPop] = useState(false);
  const [showThirdPopup,setLastShowPopup] = useState(false);


  const [fullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Country, setCountry] = useState('');
  const [Location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // ${fullName}${Email}${Password} ${Country} ${Location}
  };

  return (
    <div className="Header" id="container">
      <div className="Header-header">
        <ul className="nav">
          <li id="home">
            <a href="/"> Data dingos</a>
          </li>
          <li id="shopping">
            <a href="/OrdersPage"> Your bag</a>
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
                  href="#"
                  value="LoginAdmin"
                  onClick={() => setLastShowPopup(!showThirdPopup)}
                >
                  Admin Login
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
      </div>
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
            <div className="content2">
              <form action="Header.js" method="get">
                Mail:
                <br></br>
                <input type="text" id="email" required /> <br></br>
                <label for="pass">Password:</label>
                <br></br>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minlength="12"
                  encripted="true"
                  required
                />
                <br></br>
                <input type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </div>
      )}
      {showThirdPopup && (
        <div id="popupdiv">
          <div
            className="backgroundPopUp"
            onClick={() => setLastShowPopup(!showThirdPopup)}
          ></div>
          <div className="contentPopUp">
            <input
              type="button"
              className="buttonInPopUp"
              value="Close"
              onClick={() => setLastShowPopup(!showThirdPopup)}
            />
            <div className="content2">
              <form action="Header.js" method="get">
                Mail:
                <br></br>
                <input type="text" id="email" required /> <br></br>
                <label for="pass">Password:</label>
                <br></br>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minlength="8"
                  encripted="true"
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
            <div className="content2">
              <form action="Header.js" method="get">
                Full Name : <br></br>
                <input type="text" id="fullName" name="fullName" value={fullName} onChange={(event) => setFullName(event.target.value)} />
                <br></br>
                <br></br>
                Mail
                <br></br>
                <input type="text" id="email" required /> <br></br>
                <br></br>
                <label for="pass">Password (12 characters minimum):</label>{" "}
                <br></br>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minlength="12"
                  encripted="true"
                  required
                />
                <br></br>
                <br></br>
                <label for="pass">Retype Password:</label> <br></br>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minlength="12"
                  encripted="true"
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
          {/* <Basket></Basket> */}
        </div>
      )}
    </div>
  );
};
export default Header;

