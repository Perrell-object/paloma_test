import React from 'react'

import { Header, Footer } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="paloma__bg">
        <Navbar />
        <Header />
      </div>
      <Footer />      
    </div>
  )
}

export default App
