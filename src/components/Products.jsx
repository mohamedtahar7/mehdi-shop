import React from 'react'
import ProductCard from './ProductCard'
import { useState } from 'react'
import { chairs } from '../utils/chairs'
import { tables } from '../utils/tables'
const Products = () => {
  const [all,setAll] = useState(true);
  const [chair,setChair] = useState(false);
  const [table,setTable] = useState(false);
  return (
    <section id='products' className='h-auto py-16 px-20'>
        <h1 data-aos="fade-left" className='sm:text-5xl text-3xl text-[#11334f] text-center'>Our Products</h1>
        <div className='flex sm:flex-row flex-col justify-center gap-4 mt-6 items-center'>
          <h3 className='text-2xl text-[#11334f]'>Filter : </h3>
          <div className='flex gap-4 items-center'>
            <p onClick={()=>{setAll(true);setChair(false);setTable(false)}} className={`text-xl transition-all cursor-pointer ${all?'text-white bg-[#11334f]': 'text-[#11334f] bg-[#eee]'} px-4 rounded-lg border border-[#11334f]`} >All</p>
            <p onClick={()=>{setChair(true);setAll(false);setTable(false)}} className={`text-xl transition-all cursor-pointer ${chair?'text-white bg-[#11334f]': 'text-[#11334f] bg-[#eee]'} px-4 rounded-lg border border-[#11334f]`} >Chairs</p>
            <p onClick={()=>{setTable(true);setChair(false);setAll(false)}} className={`text-xl transition-all cursor-pointer ${table?'text-white bg-[#11334f]': 'text-[#11334f] bg-[#eee]'} px-4 rounded-lg border border-[#11334f]`} >Tables</p>
          </div>
        </div>
        {all && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {chairs.map((chair)=>(
            <ProductCard id={chair.id} key={chair.id} name={chair.name} price={chair.price}
            image={chair.images[0].image}/>
          ))}
          {tables.map((chair)=>(
            <ProductCard id={chair.id} key={chair.id} name={chair.name} price={chair.price}
            image={chair.images[0].image}/>
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
          {tables.map((chair)=>(
            <ProductCard id={chair.id} key={chair.id} name={chair.name} price={chair.price}
            image={chair.images[0].image}/>
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