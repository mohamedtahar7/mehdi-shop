import React from 'react'
import Home from '../components/Home'
import HomeHeader from '../components/HomeHeader'
import Footer from "../components/Footer"
import Products from '../components/Products'
import Feature from '../components/Feature'
const HomePage = () => {
  return (
    <div>
        <HomeHeader/>
        <Home/>
        <Products/>
        <Feature/>
        <Footer/>
    </div>
  )
}

export default HomePage