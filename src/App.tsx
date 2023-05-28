import React from 'react';
import Header from './components/Header';
import logoReact from './logo.svg';
import logo from './assets/header/freelance-desarrolloweb-seo.jpg';
import './App.css';

function App() {

  const headerProps = {
    logo: {
      src: logo, 
      alt: "Freelance Front End Developer",
      width: 170,
      height: 90,
    }
  }

  return (
    <div className="App">
    <Header 
    {...headerProps}
    />
    </div>
  );
}

export default App;
