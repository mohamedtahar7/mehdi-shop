import React from 'react'
const BenefitCard = ({name,description,icon}) => {
  return (
    <div className='w-[80%]'>
        <div className='flex items-center gap-4 mb-6'>
          {icon}
          <h4 className='text-[#11334f] lg:text-2xl text-xl font-medium'>{name}</h4>
        </div>  
        <p className='text-[#11334f] lg:text-xl text-lg sm:w-[90%] w-[130%]'>{description}</p>
    </div>
  )
}

export default BenefitCard