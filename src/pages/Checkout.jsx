import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
const Checkout = () => {
    const {cart} = useContext(CartContext)
    console.log(cart)
  return (
    <div>
        <Header/>
        
        <Footer/>
    </div>
  )
}

export default Checkout