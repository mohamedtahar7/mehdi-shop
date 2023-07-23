import React from 'react'
import Home from '../components/Home'
import HomeHeader from '../components/HomeHeader'
import Footer from "../components/Footer"
import About from '../components/About'
import Feature from '../components/Feature'
const HomePage = () => {
  return (
    <div>
        <HomeHeader/>
        <Home/>
        <About/>
        <Feature/>
        <Footer/>
    </div>
  )
}

export default HomePage