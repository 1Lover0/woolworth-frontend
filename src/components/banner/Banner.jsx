import React from 'react'
import { assests } from '../../assets/asessts'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-left">
            <div className="banner-left-text">
                <div className="banner-left-text-top">
                <h3>Get your hands on big points</h3>
                <p>Score up to 8000 bonus points for your Woolworths shop.*</p>
                </div>
                <div className="banner-left-text-bottom">
                <p>*Exclusons and T&Cs apply.</p>
                <button>Boost now</button>
                </div>
            </div>
            <div className="banner-left-img">
                <img src={assests.banner1} alt="" />
            </div>
        </div>
        <div className="banner-right">
            <h3>Welcome to Woolworths</h3>
            <p>Get the most out of your shop </p>
            <span>Log in or sign up</span>

            <div className="banner-right-item">
                <div className="banner-right-item-text">
                    <span>New</span>
                    <p>Catalogue</p>
                </div>
                <div className="banner-right-item-img">
                    <img src={assests.catalogue1} alt="" />
                </div>
            </div>

            <div className="banner-right-item">
                <div className="banner-right-item-text">
                    <p className='banner-right-item-text-space'>All Specials & Offers</p>
                </div>
                <div className="banner-right-item-img">
                    <img src={assests.catalogue1} alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Banner