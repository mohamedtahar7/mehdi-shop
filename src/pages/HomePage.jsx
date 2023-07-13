import React from 'react'
import Home from '../components/Home'
import HomeHeader from '../components/HomeHeader'
import Footer from "../components/Footer"
import Products from '../components/products'
const HomePage = () => {
  return (
    <div>
        <HomeHeader/>
        <Home/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default HomePage