import logoB from '../assets/logo.png'
import logoW from '../assets/LOGO VIDE 2.png'
import { Link } from 'react-router-dom'
import {BsCart} from 'react-icons/bs'
import {HiArrowRight} from 'react-icons/hi'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import {FaTrashAlt} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'
import { useState,useEffect } from 'react'
import CartItem from './CartItem'
const HomeHeader = () => {
    const [activeCart,setActiveCart] = useState(false)
    const [mobileNav,setMobileNav] = useState(false)
    const [activeNav,setActiveNav] = useState(false)
    const {cart,clearCart,itemAmount,total} = useContext(CartContext)
    useEffect(() => {
        window.addEventListener("scroll", () => {
          window.scrollY > 60 ? setActiveNav(true) : setActiveNav(false);
        });
      }, []);
  return (
    <div>
    <nav className={`py-4 z-10 ${activeNav?'bg-[#11334f]' : 'bg-none'} transition-all sm:px-16 px-6 fixed w-full flex justify-between items-center`}>
        <Link to="/">
            {activeNav?<img className='sm:w-48 w-40' src={logoW} alt="logo" />:<img className='sm:w-48 w-40' src={logoB} alt="logo" />}
        </Link>
        <div className='lg:block hidden'>
         <div>
            <ul className='flex items-center gap-12'>
                <li className={`text-2xl ${!activeNav?'hover:text-[#11334f]':''} transition font-normal text-[#fff] `}><a href='#'>Accueil</a></li>
                <li className={`text-2xl ${!activeNav?'hover:text-[#11334f]':''} transition font-normal text-[#fff] `}><a href='#about'>A Propos</a></li>
                <li className={`text-2xl ${!activeNav?'hover:text-[#11334f]':''} transition font-normal text-[#fff] `}><a href='#products'>Produits</a></li>
                <li onClick={()=>{setActiveCart(true)}}>
                  <a className='relative group cursor-pointer'>
                    <BsCart className={`text-[#fff] ${!activeNav?'group-hover:text-[#11334f]' : ''} transition`} size={30}/>
                    <p className={`absolute -top-3 -right-3 p-1 rounded-full text-sm ${!activeNav?'bg-[#11334f] text-white' : 'text-[#11334f] bg-white'} px-2 py-[0.125rem] transtition`}>{itemAmount}</p>
                  </a>
                </li>
            </ul>
        </div>
        </div>
        <div className='lg:hidden flex items-center gap-6'>
            {mobileNav?<CgClose onClick={()=>setMobileNav(false)} size={40} className='text-white cursor-pointer'/>:<FiMenu onClick={()=>setMobileNav(true)} size={35} className='text-white cursor-pointer'/>}
            <a onClick={()=>{setActiveCart(true)}} className='relative group cursor-pointer'>
                    <BsCart className={`text-[#fff] ${!activeNav?'group-hover:text-[#11334f]' : ''} transition`} size={30}/>
                    <p className={`absolute -top-3 -right-3 p-1 rounded-full text-sm ${!activeNav?'bg-[#11334f] text-white' : 'text-[#11334f] bg-white'} px-2 py-[0.125rem] transtition`}>{itemAmount}</p>
                  </a>
        </div>
            {/* Cart */}
        <div className={`absolute z-[20] ${activeCart?'top-0 right-0' : 'top-0 -right-full'} overflow-y-auto h-[100vh] transition-all drop-shadow-lg lg:w-[25vw] w-[100vw] md:w-[40vw] sm:w-[50vw] bg-[#eee]`}>
        <div className='py-8 px-8 flex justify-between items-center text-[#11334f]'>
          <h3 className='text-2xl font-medium text-[#11334f]'>Mon Panier ({itemAmount})</h3>
          <div className='flex items-center gap-4'>
            <FaTrashAlt onClick={()=>clearCart()}  size={25} className='text-[#11334f] cursor-pointer'/>
            <HiArrowRight onClick={()=>{setActiveCart(false)}} size={30} className='text-[#11334f] cursor-pointer'/>
          </div>
        </div>
          <h4 className='text-[#11334f] text-xl font-medium px-8 mb-3'> Total : {total}.00 DA </h4>
        <div className='overflow-y-auto'>
          {cart.map((item,index)=>(
            <CartItem item={item} key={index}/>
          ))}
        </div>
        {itemAmount>0 && <div className='px-4 py-4 flex flex-col gap-3 absolute -bottom-50 left-0 right-0'>
            <p className='w-full cursor-pointer py-4 px-2 text-center text-xl font-medium text-[#11334f] bg-[#fff]' onClick={()=>setActiveCart(false)}>Continuer Vos Achats</p>
            <Link to={'/checkout'} className='w-full py-4 px-2 text-center text-xl font-medium text-white bg-[#11334f]'>Commander</Link>
        </div>}
        </div>
        {/* Mobile Nav */}
        <div className={`absolute ${mobileNav?'top-28':'-top-96'} right-7 transition-all duration-300 bg-[#11334f] py-8 px-6`}>
            <ul className='flex flex-col gap-8 items-center'>
                <li onClick={()=>setMobileNav(false)} className='text-2xl transition font-medium text-[#fff] '><a className='cursor-pointer' href='#'>Accueil</a></li>
                <li onClick={()=>setMobileNav(false)} className='text-2xl transition font-medium text-[#fff] '><a className='cursor-pointer' href='#about'>A Propos</a></li>
                <li onClick={()=>setMobileNav(false)} className='text-2xl transition font-medium text-[#fff] '><a className='cursor-pointer' href='#products'>Produits</a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default HomeHeader