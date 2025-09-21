import React from 'react'
import './DeliveryTime.css'

const DeliveryTime = () => {
  return (
    <div className='delivery-time'>
      <div className="delivery-time-sec">
        <div className="delivery-time-text"><i class="fa-chisel fa-regular fa-clock"></i> Delivery to: <span>Set your Delivery address</span></div>
        <div className="delivery-time-option">Choose <i class="fa-solid fa-angle-right"></i></div>
      </div>
      <hr />
      <div className="delivery-time-sec">
        <div className="delivery-time-text"><i class="fa-chisel fa-regular fa-clock"></i> Select a time: <span>View available times</span></div>
        <div className="delivery-time-option">Choose <i class="fa-solid fa-angle-right"></i></div>
      </div>
    </div>
  )
}

export default DeliveryTime