import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Header } from './Common/Header';
import { Footer } from './Common/Footer';
import { Home } from './Site/Home';
import { AppHeader } from './Common/ApplicationHeader';

function App() {
  return (
    <>
 <AppHeader/>
 <Home/>
 <Footer/>
   </>
  );
}

export default App;
/*  <Header/>
   <Home/>
   <Footer/>*/
