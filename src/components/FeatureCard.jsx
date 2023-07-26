import React from 'react'
const FeatureCard = ({name,description,icon}) => {
  return (
    <div className='w-[80%]'>
        <div className='flex flex-col gap-2'>
          {icon}
          <h4 className='text-[#fff] lg:text-2xl text-xl font-normal'>{name}</h4>
        </div>  
    </div>
  )
}

export default FeatureCard