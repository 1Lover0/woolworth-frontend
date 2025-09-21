import React from 'react'
import { assests } from '../../assets/asessts'
import './Navbar1.css';

const Navbar1 = () => {
  return (
    <div className='nav-top'>
      <div className="nav-top-left">
        <img src={assests.logo} alt="" className="nav-top-logo" />
        <hr />
        <div className="nav-top-other">Everyday & Other Services <i class="fa-solid fa-angle-down"></i></div>
      </div>
      <div className="nav-top-center">
          <input type="search" placeholder='Search Products, recipes & ideas' />
          <i class="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="nav-top-right">
        <div className="nav-top-button">
          <i class="fa-solid fa-list-ul"></i>
          <div className="nav-top-list-text">
            <h5>Lists &</h5>
            <p>Buy again</p>
          </div>
        </div>
        <div className="nav-top-button">
          <i class="fa-solid fa-user"></i>
          <div className="nav-top-list-text">
            <h5>Log in or Sign up</h5>
            <p>My Account</p>
          </div>
        </div>
        <div className="nav-top-button">
          <i class="fa-solid fa-cart-shopping"></i>
          <div className="nav-top-list-text">
            <p className='cart-wallet'>$0.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar1