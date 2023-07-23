import React from 'react'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import { useState } from 'react'
import { chairs } from '../utils/chairs'
import { tables } from '../utils/tables'
import { products } from '../utils/products'
import { meubles } from '../utils/meubles'
import {banquettes} from '../utils/banquettes' 
import { categories } from '../utils/categories'
import Header from './Header'
import { motion } from 'framer-motion'
const Products = () => {
  const [category,setCategory] = useState('Tout')
  const [currentPage,setCurrentPage] = useState(1)
  const productPerPage = 6
  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProducts = products.slice(firstProductIndex,lastProductIndex)
  return (
    <section>
        <Header/>
        <div  className='h-auto py-40 px-20'>
        <motion.h1 whileInView={{x:0}} initial={{x:-200}} transition={{type:'tween',duration:0.8}} className='sm:text-5xl text-3xl text-[#11334f] text-center'>Nos Produits</motion.h1>
        <motion.div whileInView={{x:0}} initial={{x:200}} transition={{type:'tween',duration:0.8}} className='flex sm:flex-row flex-col justify-center gap-4 mt-6 items-center'>
          <h3 className='text-2xl text-[#11334f]'>Filter : </h3>
          <div  className='flex md:flex-row flex-col sm:w-auto w-fit gap-4 items-center'>
            {categories.map((type,index)=>(<p onClick={()=>setCategory(type)} key={index} className={`text-xl hover:text-white hover:bg-[#11334f] transition-all cursor-pointer ${category===type&&'text-white bg-[#11334f]'} px-4 transition-all border border-[#11334f]`}>{type}</p>))}
          </div>
        </motion.div>
        {
        category==='Tout' && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {currentProducts.map((product,index)=>(
            <ProductCard id={product.id} key={product.id} name={product.name} price={product.price}
            image={product.images[0].image}/>
            ))}
        </div>) 
        }
        {category ==='Tout' && <Pagination totalProducts={products.length} productPerPage={productPerPage} setCurrrentPage={setCurrentPage} currentPage={currentPage}/> }
        {category ==="Chaises" && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {products.filter((item)=>item.category===category).map((chair)=>(
            <ProductCard id={chair.id} key={chair.id} name={chair.name} price={chair.price}
            image={chair.images[0].image}/>
          ))}
        </div>)}
        {category ==='Chaises' && <Pagination totalProducts={chairs.length} productPerPage={productPerPage} setCurrrentPage={setCurrentPage} currentPage={currentPage}/> }
        {category ==="Tables" && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {products.filter(item=>item.category===category).map((table)=>(
            <ProductCard id={table.id} key={table.id} name={table.name} price={table.price}
            image={table.images[0].image}/>
          ))}
        </div>)}
        {category ==='Tables' && <Pagination totalProducts={tables.length} productPerPage={productPerPage} setCurrrentPage={setCurrentPage} currentPage={currentPage}/> }
        {category ==="Meubles" && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {products.filter(item=>item.category===category).map((meuble)=>(
            <ProductCard id={meuble.id} key={meuble.id} name={meuble.name} price={meuble.price}
            image={meuble.images[0].image}/>
          ))}
        </div>)}
        {category ==='Meubles' && <Pagination totalProducts={meubles.length} productPerPage={productPerPage} setCurrrentPage={setCurrentPage} currentPage={currentPage}/> }
        {category ==="Banquettes" && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {products.filter(item=>item.category===category).map((banq)=>(
            <ProductCard id={banq.id} key={banq.id} name={banq.name} price={banq.price}
            image={banq.images[0].image}/>
          ))}
        </div>)}
        {category ==='Banquettes' && <Pagination totalProducts={banquettes.length} productPerPage={productPerPage} setCurrrentPage={setCurrentPage} currentPage={currentPage}/> }
        {/* <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {chairs.map((chair)=>(
            <ProductCard id={chair.id} key={chair.id} name={chair.name} price={chair.price}
            image={chair.images[0].image}/>
          ))}
        </div> */}
        </div>
    </section>
    
  )
}

export default Products