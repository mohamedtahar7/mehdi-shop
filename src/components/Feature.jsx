import React from 'react'
import FeatureCard from './FeatureCard'
import {FiGrid} from 'react-icons/fi'
import {BiSolidCheckShield} from 'react-icons/bi'
import {TbTruckDelivery} from 'react-icons/tb'
import {CiDeliveryTruck} from 'react-icons/ci'
import {AiFillCustomerService} from 'react-icons/ai'
const Feature = () => {
  return (
    <div className='px-20  bg-[#11334f]'>
        <div className='grid place-items-center lg:grid-cols-4 sm:grid-cols-3 grid-cols-1  gap-12 py-12'>
            <FeatureCard  icon={<FiGrid size={45} className='text-[#fff]'/>} name={'Large sélection de produits'}/>
            <FeatureCard icon={<BiSolidCheckShield size={55} className='text-[#fff]'/>} name={'Assurance qualité'}/>
            <FeatureCard icon={<CiDeliveryTruck size={55} className='text-[#fff]'/>} name={'Livraison rapide et fiable'}/>
            <FeatureCard  icon={<AiFillCustomerService size={55} className='text-[#fff]'/>} name={'Service client expert'}/>
        </div>
    </div>
  )
}

export default Feature