import React from 'react'

const About = () => {
  return (
    <section id='about' className='pt-16 px-20'>
        <h1 className='text-[#11334f] sm:text-5xl text-center text-3xl'>A Propos de UniConfort</h1>
        <div className='py-24 flex items-center justify-center gap-16 md:flex-row flex-col'>
          <img className='sm:w-[40%] rounded-xl bg-[#d9dbda] py-16 px-8' src="/src/assets/about-logo.png" alt="logo" />
          <p className='sm:text-3xl text-xl sm:leading-[4rem] leading-[3rem] text-[#11334f] '>UniConfort Fabricant algérien de Mobiliers, depuis 1996. C’est une entreprise algérienne, spécialisés en aménagement des Hôtels, Restaurants et Collectivités.</p>
        </div>
    </section>
  )
}

export default About