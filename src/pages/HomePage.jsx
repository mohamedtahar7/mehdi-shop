import React, { useEffect } from 'react'
import Home from '../components/Home'
import HomeHeader from '../components/HomeHeader'
import Footer from "../components/Footer"
import Products from '../components/Products'
import Feature from '../components/Feature'
const HomePage = () => {
  useEffect(()=>{
    document.title = `Uniconfort Store | Meublez vos rêves`;
  },[])
  return (
    <div>
        <HomeHeader/>
        <Home/>
        <Feature/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default HomePage