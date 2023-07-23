import React from 'react'
import Home from '../components/Home'
import HomeHeader from '../components/HomeHeader'
import Footer from "../components/Footer"
import Benefits from '../components/Benefits'
import About from '../components/About'
const HomePage = () => {
  return (
    <div>
        <HomeHeader/>
        <Home/>
        <About/>
        <Benefits/>
        <Footer/>
    </div>
  )
}

export default HomePage