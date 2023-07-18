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
const Products = () => {
  const [category,setCategory] = useState('Tout')
  const [currentPage,setCurrentPage] = useState(1)
  const productPerPage = 6
  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProducts = products.slice(firstProductIndex,lastProductIndex)
  return (
    <section id='products' className='h-auto py-16 px-20'>
        <h1 data-aos="fade-left" className='sm:text-5xl text-3xl text-[#11334f] text-center'>Nos Produits</h1>
        <div className='flex sm:flex-row flex-col justify-center gap-4 mt-6 items-center'>
          <h3 className='text-2xl text-[#11334f]'>Filter : </h3>
          <div  className='flex md:flex-row flex-col sm:w-auto w-fit gap-4 items-center'>
            {categories.map((type,index)=>(<p onClick={()=>setCategory(type)} key={index} className={`text-xl transition-all cursor-pointer ${category===type&&'text-white bg-[#11334f]'} px-4 transition-all border border-[#11334f]`}>{type}</p>))}
          </div>
        </div>
        {
        category==='Tout' && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {currentProducts.map((product)=>(
            <ProductCard id={product.id} key={product.id} name={product.name} price={product.price}
            image={product.images[0].image}/>
            ))}
        </div>) 
        }

        {category ==='Tout' && <Pagination totalProducts={products.length} productPerPage={productPerPage} setCurrrentPage={setCurrentPage} currentPage={currentPage}/> }
        {category ==="Chaises" && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {chairs.map((chair)=>(
            <ProductCard id={chair.id} key={chair.id} name={chair.name} price={chair.price}
            image={chair.images[0].image}/>
          ))}
        </div>)}
        {category ==="Tables" && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {tables.map((table)=>(
            <ProductCard id={table.id} key={table.id} name={table.name} price={table.price}
            image={table.images[0].image}/>
          ))}
        </div>)}
        {category ==="Meubles" && (
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {meubles.map((meuble)=>(
            <ProductCard id={meuble.id} key={meuble.id} name={meuble.name} price={meuble.price}
            image={meuble.images[0].image}/>
          ))}
        </div>)}
        {category ==="Banquettes" && (
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