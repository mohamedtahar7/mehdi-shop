import React from 'react'

const FeaturedIn = () => {
  return (
    <div className='px-20 pt-8 bg-[#11334f]'>
        <h1 className='className="sm:text-5xl text-3xl pt-4 text-white text-center -mb-12 sm:-mb-16'>Approuvé Par</h1>
        <div className='grid place-items-center sm:grid-cols-5 gap-12 py-12'>
            <img src="https://i.postimg.cc/0NTTmS3N/hicham-cook.png" alt="logo" />
            <img src="https://i.postimg.cc/j2Sdz84Q/hotel-ritadj.png" alt="logo" />
            <img src="https://i.postimg.cc/8cXkwhy8/seven-times.png" alt="logo" />
            <img src="https://i.postimg.cc/zGcKtctB/hotel-emir.png" alt="logo" />
            <img className='w-[70%] sm:w-[50%]' src="https://i.postimg.cc/Xq57dFnN/tacos-world2.png" alt="logo" />
        </div>
    </div>
  )
}

export default FeaturedIn