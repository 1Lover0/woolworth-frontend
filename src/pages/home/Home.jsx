import React from 'react';
import Navbar1 from '../../components/navbar1/Navbar1';
import './Home.css'
import Banner from '../../components/banner/Banner';
import FindGreatValue from '../../components/findGreatValue/FindGreatValue';
import HalfPrice from '../../components/halfPrice/HalfPrice';

const Home = () => {
  return (
    <div className='navbar'>
      {/* <Banner />   */}
      <FindGreatValue />
      <HalfPrice />
    </div>
  )
}
  
export default Home;