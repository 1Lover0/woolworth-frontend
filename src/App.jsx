import React from 'react';
import Home from './pages/home/Home'
import './App.css'
import Navbar1 from './components/navbar1/Navbar1';
import DeliveryTime from './components/deliveryTime/DeliveryTime'
import Navbar2 from './components/navbar2/Navbar2';

const App = () => {
  return (
    <div className='navbar'>
      <div className="navbar-top">
        <Navbar1 />
      </div>
      <hr />
      <Navbar2 />
      <hr />
        <DeliveryTime />
        <hr />
        <div className="app-body">
          <Home />
        </div>
    </div>
  )
}

export default App;