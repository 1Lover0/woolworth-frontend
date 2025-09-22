import React from 'react'
import './Navbar2.css'

const Navbar2 = () => {
  return (
    <div className='navbar-cat'>
        <div className="navbar-cat-left">
            <ul>
                <li className='navbar-cat-left-menu'><i class="fa-solid fa-bars"></i> Browse products</li>
                <li className='navbar-cat-left-category'>Specials & catalogue <i class="fa-solid fa-angle-down"></i></li>
                <li className='navbar-cat-left-category-g'>Recipes & ideas <i class="fa-solid fa-angle-down"></i></li>
                <li className='navbar-cat-left-category-g'>Get more value <i class="fa-solid fa-angle-down"></i></li>
                <li className='navbar-cat-left-category-g'>Ways to shop <i class="fa-solid fa-angle-down"></i></li>
                <li className='navbar-cat-left-category-g'>Help <i class="fa-solid fa-angle-down"></i></li>
            </ul>
        </div>
        <div className="navbar-cat-right">
            <ul>
                <li className='navbar-cat-left-category-g'>Shop for business <i class="fa-solid fa-arrow-up-right-from-square location-dot"></i></li>
                <li className='navbar-cat-left-category-g'><i class="fa-solid fa-location-dot"></i> Stores</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar2