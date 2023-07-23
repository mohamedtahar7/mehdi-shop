import React from 'react'
import { motion } from 'framer-motion'
const BenefitCard = ({name,description,icon,duration}) => {
  return (
    <motion.div whileInView={{y:0,opacity:1}} initial={{y:-150,opacity:0}} transition={{type:'tween',duration:duration,delay:0.8}} className='w-[80%]'>
        <div className='flex items-center gap-4 mb-6'>
          {icon}
          <h4 className='text-[#11334f] lg:text-2xl text-xl font-medium'>{name}</h4>
        </div>  
        <p className='text-[#11334f] lg:text-xl text-lg sm:w-[90%] w-[130%]'>{description}</p>
    </motion.div>
  )
}

export default BenefitCard