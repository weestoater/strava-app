import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="container main">
        <div className="row">
          <div className="col-sm-12">
            <div className="jumbotron">
            <img src={logo} className="logo" alt="logo" />
            <h1>ianburrett ~ strava app</h1>
            <p>My aim on this page is to provide a dynamic page which displays my recent strava activities and utilises the Strava API.</p>
            <p>I'm intending to build this 'app' in reactjs &amp; bootstrap / font-awesome.</p>
            </div>
          </div>
        </div>        
      </div>
      <div className="wrapper">
        <div className="item">r1c1</div>
        <div className="item">r1c2</div>
        <div className="item">r1c3</div>
        <div className="item">r2c1</div>
        <div className="item">r2c2</div>
        <div className="item">r2c3</div>
        <div className="item">r3c1</div>
        <div className="item">r3c2</div>
        <div className="item">r3c3</div>
      </div>    
      <Footer />
    </>
  );
}

export default App;
