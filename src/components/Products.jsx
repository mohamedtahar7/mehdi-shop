import React from 'react'
import ProductCard from './ProductCard'
import { useState } from 'react'
import { chairs } from '../utils/chairs'
import { tables } from '../utils/tables'
import { products } from '../utils/products'
import { meubles } from '../utils/meubles'
import {banquettes} from '../utils/banquettes' 
const Products = () => {
  const [all,setAll] = useState(true);
  const [chair,setChair] = useState(false);
  const [table,setTable] = useState(false);
  const [meuble,setMeuble] = useState(false)
  const [banq,setBanq] = useState(false)
  return (
    <section id='products' className='h-auto py-16 px-20'>
        <h1 data-aos="fade-left" className='sm:text-5xl text-3xl text-[#11334f] text-center'>Our Products</h1>
        <div className='flex sm:flex-row flex-col justify-center gap-4 mt-6 items-center'>
          <h3 className='text-2xl text-[#11334f]'>Filter : </h3>
          <div className='flex md:flex-row flex-col sm:w-auto w-fit gap-4 items-center'>
            <p onClick={()=>{setAll(true);setChair(false);setTable(false);setMeuble(false);setBanq(false)}} className={`text-xl transition-all cursor-pointer ${all?'text-white bg-[#11334f]': 'text-[#11334f] bg-[#eee]'} px-4 rounded-lg border border-[#11334f]`} >All</p>
            <p onClick={()=>{setChair(true);setAll(false);setTable(false);setMeuble(false);setBanq(false)}} className={`text-xl transition-all cursor-pointer ${chair?'text-white bg-[#11334f]': 'text-[#11334f] bg-[#eee]'} px-4 rounded-lg border border-[#11334f]`} >Chairs</p>
            <p onClick={()=>{setTable(true);setChair(false);setAll(false);setMeuble(false);setBanq(false)}} className={`text-xl transition-all cursor-pointer ${table?'text-white bg-[#11334f]': 'text-[#11334f] bg-[#eee]'} px-4 rounded-lg border border-[#11334f]`} >Tables</p>
            <p onClick={()=>{setMeuble(true);setTable(false);setChair(false);setAll(false);setBanq(false)}} className={`text-xl transition-all cursor-pointer ${meuble?'text-white bg-[#11334f]': 'text-[#11334f] bg-[#eee]'} px-4 rounded-lg border border-[#11334f]`} >Meubles</p>
            <p onClick={()=>{setBanq(true);setMeuble(false);setTable(false);setChair(false);setAll(false)}} className={`text-xl transition-all cursor-pointer ${banq?'text-white bg-[#11334f]': 'text-[#11334f] bg-[#eee]'} px-4 rounded-lg border border-[#11334f]`} >Banquettes</p>
          </div>
        </div>
        {all && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {products.map((product)=>(
            <ProductCard id={product.id} key={product.id} name={product.name} price={product.price}
            image={product.images[0].image}/>
          ))}
        </div>) }
        {chair && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {chairs.map((chair)=>(
            <ProductCard id={chair.id} key={chair.id} name={chair.name} price={chair.price}
            image={chair.images[0].image}/>
          ))}
        </div>)}
        {table && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {tables.map((table)=>(
            <ProductCard id={table.id} key={table.id} name={table.name} price={table.price}
            image={table.images[0].image}/>
          ))}
        </div>)}
        {meuble && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {meubles.map((meuble)=>(
            <ProductCard id={meuble.id} key={meuble.id} name={meuble.name} price={meuble.price}
            image={meuble.images[0].image}/>
          ))}
        </div>)}
        {banq && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {banquettes.map((banq)=>(
            <ProductCard id={banq.id} key={banq.id} name={banq.name} price={banq.price}
            image={banq.images[0].image}/>
          ))}
        </div>)}
        {/* <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {chairs.map((chair)=>(
            <ProductCard id={chair.id} key={chair.id} name={chair.name} price={chair.price}
            image={chair.images[0].image}/>
          ))}
        </div> */}
    </section>
    
  )
}

export default Products