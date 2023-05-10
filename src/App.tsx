import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Password from "./pages/Password";
import Sections from "./pages/Sections";
import NextDates from "./pages/NextDates";

import "./App.css";

const App = () => {
  const [isCorrectPassword, setIsCorrectPassword] = useState<boolean>(false);
  
  return (
    <div className="app">
      <header className="header">
        <div className="header_container">
          <h1>Proyecto G y H</h1>
        </div>
      </header>
      <main className="body">
        <div className="wrapper">
        <Router>
          <Routes>
            <Route index element={ isCorrectPassword ? <Sections /> : <Password setIsCorrectPassword={setIsCorrectPassword} />} />
            <Route path="next-dates" element={<NextDates />} />
          </Routes>
        </Router>
        </div>
      </main>
      <footer className="footer">
        <div className="footer_container">
          <p className="footer_developer">Hecho por: Heraldo Fortuna - 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
