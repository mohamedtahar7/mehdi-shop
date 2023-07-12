import React from 'react'
import Home from '../components/Home'
import HomeHeader from '../components/HomeHeader'
import Products from '../components/products'
const HomePage = () => {
  return (
    <div>
        <HomeHeader/>
        <Home/>
        <Products/>
    </div>
  )
}

export default HomePage