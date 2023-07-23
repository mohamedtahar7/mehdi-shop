import React from 'react'
import BenefitCard from './BenefitCard'
import {FiGrid} from 'react-icons/fi'
import {BiSolidCheckShield} from 'react-icons/bi'
import { motion } from 'framer-motion'
import {AiFillCustomerService} from 'react-icons/ai'
const Benefits = () => {
  return (
    <div className='px-20 pb-16'>
        <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:-200,opacity:0}} transition={{type:'tween',duration:0.8}}   className='sm:text-3xl lg:text-5xl text-2xl mb-4 text-[#11334f] text-center'>Avantages d'acheter chez nous</motion.h1>
        <div className='flex items-center lg:flex-row flex-col gap-12 py-12'>
            <BenefitCard duration={0.5} icon={<FiGrid size={45} className='text-[#11334f]'/>} name={'Large sélection de produits'} description ={"Découvrez une vaste collection de meubles haut de gamme, soigneusement sélectionnés pour répondre à tous les styles et préférences. Notre vaste sélection vous assure de trouver les pièces parfaites pour transformer vos espaces de vie. Explorez un monde de possibilités et créez la maison dont vous avez toujours rêvé"}/>
            <BenefitCard duration={1} icon={<BiSolidCheckShield size={55} className='text-[#11334f]'/>} name={'Assurance qualité'} description ={"Nos meubles sont fabriqués avec une attention méticuleuse aux détails et avec les meilleurs matériaux, garantissant durabilité et beauté durable. Achetez en toute confiance, sachant que chaque pièce est soutenue par notre engagement envers une assurance qualité exceptionnelle."}/>
            <BenefitCard duration={1.5} icon={<AiFillCustomerService size={55} className='text-[#11334f]'/>} name={'Service client expert'} description ={"Notre équipe d'experts dévoués est là pour vous aider avec des conseils personnalisés et des solutions rapides. Des demandes de renseignements sur les produits à l'assistance après-vente, comptez sur notre service client expert pour garantir une expérience d'achat fluide et satisfaisante."}/>
        </div>
    </div>
  )
}

export default Benefits