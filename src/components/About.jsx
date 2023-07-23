import React from 'react'
import Header from './Header'
const About = () => {
  return (
    <section id='about'>
      <div className='py-36 px-20'>
        <h1 className='text-[#11334f] sm:text-5xl text-center text-3xl'>A Propos de UniConfort</h1>
        <div className='py-24 flex items-center justify-center gap-16 md:flex-row flex-col'>
          <img className='sm:w-[40%] w-full rounded-xl bg-[#d9dbda] py-16 px-8' src="https://i.postimg.cc/fbYMh4Pm/about-logo.png" alt="logo" />
          <p className='sm:text-3xl text-xl sm:leading-[4rem] leading-[3rem] text-[#11334f] '>UniConfort Fabricant algérien de Mobiliers, depuis 1996. C’est une entreprise algérienne, spécialisés en aménagement des Hôtels, Restaurants et Collectivités.</p>
        </div>
      </div>
    </section>
  )
}

export default About