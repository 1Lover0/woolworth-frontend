import React from 'react';
import './HalfPrice.css'

const HalfPrice = () => {
  return (
    <div className='section-margin halfprice'>
        <div className="halfprice-header">
            <h2>Half Price specials</h2>
            <div className="halfprice-header-left">
                <p>View all</p>
                <div className="halfprice-header-left-angle">
                    <i class="fa-solid fa-angle-left"></i>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </div>
        <div className="halfprice-items">
            <div className='halfprice-items-item'>1</div>
            <div className='halfprice-items-item'>2</div>
            <div className='halfprice-items-item'>3</div>
            <div className='halfprice-items-item'>4</div>
            <div className='halfprice-items-item'>2</div>
            <div className='halfprice-items-item'>3</div>
            <div className='halfprice-items-item'>4</div>
            <div className='halfprice-items-item'>2</div>
            <div className='halfprice-items-item'>3</div>
            <div className='halfprice-items-item'>4</div>
        </div>
    </div>
  )
}

export default HalfPrice