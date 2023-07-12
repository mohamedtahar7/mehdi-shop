import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../utils/products'
import Header from '../components/Header'
const ProductDetails = () => {
    const {id} = useParams()
    const product = products.find((item)=>item.id === parseInt(id))
    const [shownImg,setShownImg] = useState(0)
    const [productNum,setProductNum] = useState(1)
  return (
    <div>
      <Header/>
      {/* Imgs */}
      <div className='py-[16rem] relative px-16 flex items-center'>
        {/* imgs */}
        <div className='flex relative flex-col gap-6'>
            {shownImg===1?<img src={product.images[0].image} alt="image" className='w-[30%] rounded-lg'/> : <img src={product.images[1].image} alt="image" className='w-[30%] rounded-lg' />}
            <div className='flex flex-row gap-4'>
                {product.images.map((image,index)=>(
                    <img onClick={()=>setShownImg(index)} src={image.image} alt="image" className='w-[8%] rounded-lg cursor-pointer hover:opacity-80' key={index} />
                ))}
            </div>
        </div>
        {/* text */}
        <div className='absolute top-[18rem] left-[48rem]'>
            <h1 className='text-6xl text-[#11334f] mb-10'>{product.name}</h1>
            <div className='flex items-center gap-4 mb-8'>
                <h3 className='text-[#11334f] text-lg font-normal'>Quantity :</h3>
                <input value={productNum} onChange={(e)=>{e.target.value>0 && setProductNum(e.target.value)}} type="number" className='w-20 py-1 px-4 rounded-xl' />
            </div>
            <p className='text-xl font- w-[60%] text-[#11334f]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad deserunt fugiat perspiciatis assumenda sunt consequuntur numquam delectus tempore aliquam iusto ducimus voluptatibus commodi, sint, dolores molestiae aut quo veniam explicabo!</p>
            <p className='text-xl text-[#11334f] mt-8'>Price : {product.price} DA</p>
            <button className='py-3 px-8 bg-[#11334f] text-white hover:opacity-80 transition-all mt-8'>Add To Cart</button>
        </div>
      </div>
    </div>

  )
}

export default ProductDetails