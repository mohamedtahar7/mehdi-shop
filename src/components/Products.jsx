import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../utils/products'
const Products = () => {
  return (
    <section id='products' className='h-[1280px] py-16 px-20'>
        <h1 className='text-5xl text-[#11334f] text-center'>Our Products</h1>
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {products.map((product)=>(
            <ProductCard id={product.id} key={product.id} name={product.name} price={product.price}
            image={product.images[0].image}/>
          ))}
        </div>
    </section>
  )
}

export default Products