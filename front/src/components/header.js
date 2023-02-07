import React, { useState } from "react";
import "../assets/Header.css";

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [ShowSecondPop, setShowSecondPop] = useState(false);

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
            <a href="#" >Data dingos</a>
          </li>
          <li id="login">
            <a>Login/Inscription</a>
            <ul className="subnav">
              <li> <a href="#" value="Login" onClick={() => setShowPopup(!showPopup)}>Login</a>
              </li>
              <li>
                <a href="#inscription" onClick={() => setShowSecondPop(!ShowSecondPop)}>Register</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {showPopup && (
        <div id="popupdiv">
          <div className="backgroundPopUp" onClick={() => setShowPopup(!showPopup)}
          ></div>
          <div className="contentPopUp">
            <input type="button" className="buttonInPopUp" value="Fermer" onClick={() => setShowPopup(!showPopup)} />
            <div className="content">
              <form action="Header.js" method="get">
                <br></br>
                Mail <br></br>
                <input type="email" id="email" pattern=".+@globex\.com" size="30" required />{" "}
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
              <form onSubmit={handleSubmit}>
                Full Name : <br></br>
                <input type="text" id="fullName" name="fullName" value={fullName} onChange={(event) => setFullName(event.target.value)} />
                <br></br>
                Mail <br></br>
                <input type="email" size="30" id="Email" name="Email" value={Email} onChange={(event) => setEmail(event.target.value)}/>{" "}
                <br></br>
                <label for="pass">Password (8 characters minimum):</label>{" "}
                <br />
                <input type="password" id="Password" name="Password" value={Password} onChange={(event) => setPassword(event.target.value)}/>
                <br />
                Country code : <br></br>
                <input type="text" id="Country" name="country" value={Country} onChange={(event) => setCountry(event.target.value)} /> <br></br>
                Location : <br></br>
                <input type="text" id="Location" name="Location" value={Location} onChange={(event) => setLocation(event.target.value) } /> <br></br>
                <input type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}