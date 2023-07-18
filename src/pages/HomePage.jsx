import React from 'react'
import Home from '../components/Home'
import HomeHeader from '../components/HomeHeader'
import Footer from "../components/Footer"
import Products from '../components/Products'
import About from '../components/About'
const HomePage = () => {
  return (
    <div>
        <HomeHeader/>
        <Home/>
        <About/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default HomePage