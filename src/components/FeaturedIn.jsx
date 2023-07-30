import React from 'react'

const FeaturedIn = () => {
  return (
    <div className='px-20 pt-8 bg-[#11334f]'>
        <h1 className='className="sm:text-5xl text-3xl pt-4 text-white text-center -mb-12 sm:-mb-16'>Nos References Clients</h1>
        <div className='grid place-items-center md:grid-cols-3 lg:grid-cols-6 grid-cols-1 gap-12 py-12'>
            <img src="https://i.postimg.cc/0NTTmS3N/hicham-cook.png" alt="logo" />
            <img className='rounded-full w-[70%] sm:w-[60%]' src="https://i.postimg.cc/j29ffw2N/zina-beach.jpg" alt="logo" />
            <img src="https://i.postimg.cc/8cXkwhy8/seven-times.png" alt="logo" />
            <img className='rounded-full w-[70%] sm:w-[60%]' src="https://i.postimg.cc/wj0d6hGw/sopimem.jpg" alt="logo" />
            <img className='w-[70%] sm:w-[60%]' src="https://i.postimg.cc/ZqxtpvP2/tacos-world-jpg.png" alt="logo" />
            <img className='w-[70%] sm:w-[60%] rounded-full' src="https://i.postimg.cc/6qk4RPt9/la-casa-del-pizza.jpg" alt="logo" />
        </div>
    </div>
  )
}

export default FeaturedIn