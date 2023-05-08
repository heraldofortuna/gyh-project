import React, { useState, useEffect } from "react";

import "./App.css";

import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  const [password, setPassword] = useState("");
  const [isCorrectPassword, setIsCorrectPassword] = useState("");

  const handlePasswordInput = (event) => {
    setPassword(event?.target?.value);
  };

  const handlePasswordSubmit = () => {
    if (password?.replace(/\s/g, "")?.toLocaleLowerCase() === "genesisyheraldo") {
      setIsCorrectPassword(true);
    };
  };

  useEffect(() => {
    setIsCorrectPassword("");
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="header_container">
          <h1>GyH Project</h1>
        </div>
      </header>
      <body className="body">
        <div className="wrapper">
          {
            isCorrectPassword ? (
              <>
                <div>
                  <ul>
                    <li>1. Tonito en Terrazas los 2</li>
                    <li>2. Fullday en un club</li>
                    <li>3. Vamos a un estreno en el cine</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Input  
                  label="Ingrese contraseña"
                  handleInput={handlePasswordInput}
                />
                <Button
                  text="Ingresar"
                  handleClick={handlePasswordSubmit}
                />
              </>
            )
          }
        </div>
      </body>
      <footer className="footer">
        <div className="footer_container">
          <p className="footer_developer">Hecho por: Heraldo Fortuna - 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
