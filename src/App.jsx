import React from 'react';
import Home from './pages/home/Home'
import './App.css'
import Navbar1 from './components/navbar1/Navbar1';
import DeliveryTime from './components/deliveryTime/DeliveryTime'

const App = () => {
  return (
    <div className='navbar'>
      <div className="navbar-top">
        <Navbar1 />
      </div>
      <hr />
        <DeliveryTime />
    </div>
  )
}

export default App;