import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './compunents/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBanner from './compunents/TopBanner/TopBanner';
import Foods from './compunents/Foods/Foods';
import WhyChoose from './compunents/WhyChoose/WhyChoose';

function App() {
  return (
    <div className="App">
          <Header></Header>
          <TopBanner></TopBanner>
          <Foods></Foods>
          <WhyChoose></WhyChoose>
    </div>
  );
}

export default App;
