import React from 'react'

import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner"
// import Header from "./components/header/Header";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Trending from './trending/Trending';

// import second from '../../../public/black_to_white_anim.mov'
const Home = () => {
  return (
    <>
    <Header activeTab={"homeTab"}></Header>
    <div className='homePage'>
      <HeroBanner></HeroBanner>
      <Trending></Trending>
      <div style={{height: 1000}}></div>
      {/* <h1>RR</h1> */}
      {/* <video id="background-video" autoPlay muted>
      <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"/>
      </video> */}
    </div>
    <Footer></Footer>
    </>
  )
}

export default Home