import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './compunents/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBanner from './compunents/TopBanner/TopBanner';
import WhyChoose from './compunents/WhyChoose/WhyChoose';
import FoodsItem from './compunents/FoodsItem/FoodsItem';

function App() {
  return (
    <div className="App">
          <Header></Header>
          <TopBanner></TopBanner>
          <FoodsItem></FoodsItem>
          <WhyChoose></WhyChoose>
    </div>
  );
}

export default App;
