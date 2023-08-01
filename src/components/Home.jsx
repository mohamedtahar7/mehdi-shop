import React from 'react'
const Home = () => {
  return (
    <section className='sm:py-80 py-36 lg:py-48 xl:py-56 2xl:py-96 px-20 bg-[url("/src/assets/home-bg2.jpg")] bg-no-repeat bg-center bg-cover bg-fixed h-[100vh] w-full'>
        <div className='text-center lg:-mt-8'>
            <h1 className='md:text-8xl text-[2.8rem] text-white font-semibold mb-12'>
            Découvrez l'élégance intemporelle
            </h1>
            <p className='text-white mb-12 md:text-2xl text-xl font-medium'>Transformez votre espace avec notre collection de meubles exquis..</p>
             <a href="#products" className=' md:text-xl text-lg font-medium py-3 hover:bg-[#11334f] hover:border-none transition-all md:px-8 px-6 bg-none border-white border text-white'>
             Voir Nos Produits
             </a>
        </div>
    </section>
  )
}

export default Home