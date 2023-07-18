import React from 'react'
import heroImg from '../assets/photo 03.png'

const Home = () => {
  return (
    <section className='sm:py-80 py-36 px-20 bg-[url("/src/assets/home-bg.jpg")] bg-no-repeat bg-center bg-cover bg-fixed h-[100vh] w-full'>
        <div className='text-center'>
            <h1 className='md:text-8xl text-[3.3rem] text-white font-semibold mb-12'>
            Découvrez l'élégance intemporelle
            </h1>
            <p className='text-white mb-12 text-2xl font-medium'>Transformez votre espace avec notre collection de meubles exquis..</p>
            <a href="#products" className=' text-xl font-medium py-3 hover:bg-[#11334f] hover:border-none transition-all px-8 bg-none border-white border text-white'>
              Voir Plus
            </a>
        </div>
    </section>
  )
}

export default Home