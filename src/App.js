import React from 'react';
import './App.css';
import Header from "./components/headers/Header";
import Date from "./components/dates/Date";
import Cards from "./components/cards/Card";
import Buttons from "./components/buttons/Buttons";


function App() {
  return (
      <React.Fragment>
          <Header />
          <Date />
          <div className="container">
              <Buttons />
              <Cards date="11 Agustus 2020" />
              <Cards date="12 Agustus 2020"/>
              <Cards date="13 Agustus 2020"/>
          </div>
      </React.Fragment>
  );
}


export default App;
