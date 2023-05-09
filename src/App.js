import React, { useState } from "react";

import "./App.css";

import Sections from "./pages/Sections";
import Password from "./pages/Password";

const App = () => {
  const [isCorrectPassword, setIsCorrectPassword] = useState("");
  
  return (
    <div className="app">
      <header className="header">
        <div className="header_container">
          <h1>Proyecto G y H</h1>
        </div>
      </header>
      <body className="body">
        <div className="wrapper">
          {
            isCorrectPassword ? (
              <Sections />
            ) : (
              <Password setIsCorrectPassword={setIsCorrectPassword} />
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
