import React from 'react'
import { Link } from 'react-router-dom' 
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <section className='sm:py-80 py-36 lg:py-48 xl:py-56 2xl:py-96 px-20 bg-[url("/src/assets/home-bg.jpg")] bg-no-repeat bg-center bg-cover bg-fixed h-[100vh] w-full'>
        <div className='text-center'>
            <motion.h1 transition={{type:'tween',duration:0.7}}  initial={{x:-100}} animate={{x:0}}  className='md:text-8xl text-[3.3rem] text-white font-semibold mb-12'>
            Découvrez l'élégance intemporelle
            </motion.h1>
            <motion.p transition={{type:'tween',duration:0.7}} initial={{x:100}} animate={{x:0}}   className='text-white mb-12 text-2xl font-medium'>Transformez votre espace avec notre collection de meubles exquis..</motion.p>
            <motion.div transition={{type:'tween',duration:0.7}} initial={{y:100}} animate={{y:0}}>
             <Link to="/products" className=' text-xl font-medium py-3 hover:bg-[#11334f] hover:border-none transition-all px-8 bg-none border-white border text-white'>
              Voir Plus
             </Link>
            </motion.div>
        </div>
    </section>
  )
}

export default Home