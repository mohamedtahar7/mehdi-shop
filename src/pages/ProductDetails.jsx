import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../utils/products'
import Header from '../components/Header'
const ProductDetails = () => {
    const {id} = useParams()
    const product = products.find((item)=>item.id === parseInt(id))
    const [shownImg,setShownImg] = useState(0)
  return (
    <div>
      <Header/>
      {/* Imgs */}
      <div className='py-[16rem] px-16'>
        <div className='flex'>
          <div className='flex flex-1 flex-col gap-6'>
            {shownImg===1?<img src={product.images[0].image} alt="image" className='w-[30%] rounded-lg'/> : <img src={product.images[1].image} alt="image" className='w-[30%] rounded-lg' />}
            <div className='flex flex-row gap-4'>
                {product.images.map((image,index)=>(
                    <img onClick={()=>setShownImg(index)} src={image.image} alt="image" className='w-[8%] rounded-lg cursor-pointer hover:opacity-80' key={index} />
                ))}
            </div>
          </div>
        </div>
        {/* Text */}
        <div className='flex-1'>
            <h1 className='text-6xl w-auto'>{product.name}</h1>
        </div>
      </div>
    </div>

  )
}

export default ProductDetails