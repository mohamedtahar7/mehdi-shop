import logoB from '../assets/logo.png'
import logoW from '../assets/LOGO VIDE 2.png'
import { Link } from 'react-router-dom'
import {BsCart} from 'react-icons/bs'
import {HiArrowRight} from 'react-icons/hi'
import {FiMenu} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'
import { useState,useEffect } from 'react'
const Header = () => {
    const [activeCart,setActiveCart] = useState(false)
    const [mobileNav,setMobileNav] = useState(false)
    const [activeNav,setActiveNav] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
          window.scrollY > 60 ? setActiveNav(true) : setActiveNav(false);
        });
      }, []);
  return (
    <div>
    <nav className={`py-4 z-10 ${activeNav?'bg-[#11334f]' : 'bg-none'} transition-all px-16 fixed w-full flex justify-between items-center`}>
        <Link to="/">
            {activeNav?<img className='w-48 h-24' src={logoW} alt="logo" />:<img className='w-48 h-24' src={logoB} alt="logo" />}
        </Link>
        <div className='lg:block hidden'>
         <div>
            <ul className='flex items-center gap-12'>
                <li className={`text-2xl ${!activeNav?'hover:text-[#11334f]':'text-white'} transition font-medium text-[#11334f] `}><Link to='/'>Home</Link></li>
                <li className={`text-2xl ${!activeNav?'hover:text-[#11334f]':'text-white'} transition font-medium text-[#11334f] `}><Link to='/#about'>About</Link></li>
                <li className={`text-2xl ${!activeNav?'hover:text-[#11334f]':'text-white'} transition font-medium text-[#11334f] `}><a href='#products'>Products</a></li>
                <li className={`text-2xl ${!activeNav?'hover:text-[#11334f]':'text-white'} transition font-medium text-[#11334f] `}><Link to='/#contact'>Contact Us</Link></li>
                <li onClick={()=>{setActiveCart(true)}}>
                  <a className='relative group cursor-pointer'>
                    <BsCart className={`text-[#11334f] ${!activeNav?'group-hover:text-[#11334f] text-[#11334f]' : 'text-white'} transition`} size={30}/>
                    <p className={`absolute -top-3 -right-3 p-1 rounded-full text-sm ${!activeNav?'bg-[#11334f] text-white' : 'text-[#11334f] bg-white'} px-2 py-[0.125rem] transtition`}>0</p>
                  </a>
                </li>
            </ul>
        </div>
        </div>
        <div className='lg:hidden flex items-center gap-6'>
            {mobileNav?<CgClose onClick={()=>setMobileNav(false)} size={40} className='text-white cursor-pointer'/>:<FiMenu onClick={()=>setMobileNav(true)} size={35} className='text-white cursor-pointer'/>}
            <a onClick={()=>setActiveCart(true)} className='relative group cursor-pointer'><BsCart className='text-[#fff] group-hover:text-[#091a28] transition' size={30}/> <p className='absolute -top-3 -right-3 p-1 rounded-full text-sm bg-[#11334f] px-2 py-[0.125rem] group-hover:bg-[#091a28] transtition text-white'>0</p></a>
        </div>
            {/* Cart */}
        <div className={`absolute z-[20] ${activeCart?'top-0 right-0' : 'top-0 -right-full'} overflow-hidden h-[100vh] transition-all drop-shadow-lg lg:w-[25vw] w-[100vw] md:w-[40vw] sm:w-[50vw] bg-[#eee]`}>
        <div className='py-8 px-8 flex justify-between items-center'>
          <h3 className='text-2xl font-medium'>My Cart (0)</h3>
          <HiArrowRight onClick={()=>{setActiveCart(false)}} size={30} className='text-black cursor-pointer'/>
        </div>
        <div>
          {cart.map()}
        </div>
        <div className='px-4 py-4 flex flex-col gap-3 absolute bottom-0 left-0 right-0'>
            <a href='#' className='w-full py-4 px-2 text-center text-xl font-medium rounded-lg transition-all text-[#11334f] bg-[#fff]' onClick={()=>setActiveCart(false)}>Continue Shopping</a>
            <a href='#' className='w-full py-4 px-2 text-center text-xl font-medium rounded-lg text-white bg-[#11334f]'>Checkout</a>
        </div>
        </div>
        {/* Mobile Nav */}
        <div className={`absolute ${mobileNav?'top-32':'-top-96'} right-7 transition-all duration-300 bg-[#11334f] py-8 px-6 rounded-lg`}>
            <ul className='flex flex-col gap-8 items-center'>
                <li className='text-2xl transition font-medium text-[#fff] '><a className='cursor-pointer' href='#'>Home</a></li>
                <li className='text-2xl transition font-medium text-[#fff] '><a className='cursor-pointer' href='#about'>About</a></li>
                <li className='text-2xl transition font-medium text-[#fff] '><a className='cursor-pointer' href='#products'>Products</a></li>
                <li className='text-2xl transition font-medium text-[#fff] '><a className='cursor-pointer' href='#contact'>Contact Us</a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Header