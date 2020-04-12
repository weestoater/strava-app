import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
      <img src={logo} className="logo" alt="logo" />
    </>
  );
}

export default App;
