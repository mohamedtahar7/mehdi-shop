import React from 'react'
import FeatureCard from './FeatureCard'
import {FiGrid} from 'react-icons/fi'
import {BiSolidCheckShield} from 'react-icons/bi'
import {RiCustomerService2Line} from 'react-icons/ri'
import {CiDeliveryTruck} from 'react-icons/ci'
const Feature = () => {
  return (
    <div className='px-20'>
        <h1 className='className="sm:text-5xl font-medium text-3xl pt-4 mb-4 text-[#11334f] text-center mt-4'>Caractéristiques et Avantages</h1>
        <div className='grid place-items-center lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-12 py-12'>
            <FeatureCard  icon={<FiGrid size={45} className='text-[#11334f]'/>} name={'Une grande sélection de produits'}/>
            <FeatureCard icon={<BiSolidCheckShield size={55} className='text-[#11334f]'/>} name={'Produit de qualité'}/>
            <FeatureCard icon={<CiDeliveryTruck size={55} className='text-[#11334f]'/>} name={'Livraison rapide et fiable'}/>
            <FeatureCard  icon={<RiCustomerService2Line size={55} className='text-[#11334f]'/>} name={'Service client expert'}/>
        </div>
    </div>
  )
}

export default Feature