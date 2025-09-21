import React from 'react'
import { assests } from '../../assets/asessts'
import './Navbar1.css';

const Navbar1 = () => {
  return (
    <div className='nav-top'>
      <div className="nav-top-left">
        <img src={assests.logo} alt="" className="nav-top-logo" />
        <hr />
        <div className="sa">Everyday & Other Services</div>
      </div>
      <div className="nav-top-center">
        <div className="search-box">
          <input type="search" placeholder='Search Products, recipes & ideas' />
        </div>
      </div>
      <div className="nav-top-right">
        <div className="nav-top-list">as</div>
        <div className="nav-top-user">as</div>
        <div className="nav-top-cart">$0.00</div>
      </div>
    </div>
  )
}

export default Navbar1