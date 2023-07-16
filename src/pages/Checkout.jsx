import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useContext,useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import CheckoutContact from '../components/CheckoutContact'
import CartItem from '../components/CartItem'
const Checkout = () => {
    const [sucessOrder,setSuccessOrder] = useState(false)
    const {cart,itemAmount,total} = useContext(CartContext)
  return (
    <div>
        <Header/>
           {sucessOrder && <div className='z-30 fixed top-[10%] left-[50%] translate-x-[-50%] rounded-xl sm:text-2xl text-lg w-fit py-2 px-4 bg-green-500 text-white'>
             <h3>Your Order has been sent successfully</h3>
           </div>}
           <div className='py-[12rem] px-16 flex sm:flex-row md:gap-10'>
             <CheckoutContact successOrder={sucessOrder} setSuccessOrder={setSuccessOrder}/>
             <div className='w-[40%] md:block hidden'>
              <h1 className='text-2xl pb-4 text-[#11334f]'>My Cart ({itemAmount})</h1>
              {cart.map((item,index)=>(
                <CartItem item={item} key={index}/>
              ))}
              <h1 className='text-2xl text-[#11334f]'>Total : {total}.00 DA</h1>
             </div>
           </div>
        <Footer/>
    </div>
  )
}

export default Checkout