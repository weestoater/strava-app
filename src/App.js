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
      <Footer />
    </>
  );
}

export default App;
