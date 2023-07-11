import logo from '../assets/logo.png'
import {BsCart} from 'react-icons/bs'
import {HiArrowRight} from 'react-icons/hi'
import {FiMenu} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'
import { useState } from 'react'
const Header = () => {
    const [activeCart,setActiveCart] = useState(false)
    const [mobileNav,setMobileNav] = useState(false)
  return (
    <div>
    <nav className='py-8 z-10 bg-none px-16 fixed w-full flex justify-between items-center'>
        <a href="#">
            <img className='w-48 h-24' src={logo} alt="logo" />
        </a>
        <div className='lg:block hidden'>
         <div>
            <ul className='flex items-center gap-12'>
                <li className='text-2xl hover:text-[#091a28] transition font-medium text-[#fff] '><a href='#'>Home</a></li>
                <li className='text-2xl hover:text-[#091a28] transition font-medium text-[#fff] '><a href='#'>About</a></li>
                <li className='text-2xl hover:text-[#091a28] transition font-medium text-[#fff] '><a href='#'>Products</a></li>
                <li className='text-2xl hover:text-[#091a28] transition font-medium text-[#fff] '><a href='#'>Contact Us</a></li>
                <li onClick={()=>{setActiveCart(true)}}><a className='relative group' href="#"><BsCart className='text-[#fff] group-hover:text-[#091a28] transition' size={30}/> <p className='absolute -top-3 -right-3 p-1 rounded-full text-sm bg-[#11334f] px-2 py-[0.125rem] group-hover:bg-[#091a28] transtition text-white'>0</p></a></li>
            </ul>
        </div>
        <div className='lg:hidden block'>
            {mobileNav?<FiMenu className='text-white cursor-pointer' size={35}/> :<CgClose size={40} className='text-white cursor-pointer'/>}
        </div>
        </div>
            {/* Cart */}
        <div className={`absolute z-[20] ${activeCart?'top-0 right-0' : 'top-0 -right-[51.2rem]'} h-[100vh] transition delay-300 drop-shadow-lg lg:w-[25vw] w-[100vw] md:w-[40vw] sm:w-[50vw] bg-[#eee]`}>
        <div className='py-8 px-8 flex justify-between items-center'>
          <h3 className='text-2xl font-medium'>My Cart (0)</h3>
          <HiArrowRight onClick={()=>{setActiveCart(false)}} size={30} className='text-black cursor-pointer'/>
        </div>
        <div className='px-4 py-4 flex flex-col gap-3 absolute bottom-0 left-0 right-0'>
            <a href='#' className='w-full py-4 px-2 text-center text-xl font-medium rounded-lg text-[#11334f] bg-[#fff]' onClick={()=>setActiveCart(false)}>Continue Shopping</a>
            <a href='#' className='w-full py-4 px-2 text-center text-xl font-medium rounded-lg text-white bg-[#11334f]'>Checkout</a>

        </div>
        </div>
        {/* Mobile Nav */}
        <div className='absolute top-0 right'>
            <ul className='flex flex-col gap-4 items-center'>
                <li className='text-2xl hover:text-[#091a28] transition font-medium text-[#fff] '><a href='#'>Home</a></li>
                <li className='text-2xl hover:text-[#091a28] transition font-medium text-[#fff] '><a href='#'>About</a></li>
                <li className='text-2xl hover:text-[#091a28] transition font-medium text-[#fff] '><a href='#'>Products</a></li>
                <li className='text-2xl hover:text-[#091a28] transition font-medium text-[#fff] '><a href='#'>Contact Us</a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Header