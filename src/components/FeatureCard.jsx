import React from 'react'
const FeatureCard = ({name,description,icon}) => {
  return (
    <div className='w-[80%]'>
        <div className='flex flex-col gap-2'>
          {icon}
          <h4 className='text-[#11334f] lg:text-2xl text-xl mt-6 font-semibold'>{name}</h4>
        </div>  
    </div>
  )
}

export default FeatureCard