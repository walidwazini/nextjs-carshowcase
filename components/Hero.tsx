'use client'

import React from 'react'
import Image from 'next/image'

import { CustomButton } from '.'

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover')

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='hero' >
      <div className='flex-1 pt-36 padding-x ' >
        <h1 className="hero__title">
          Find your or book your car -- quick and easy!
        </h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <CustomButton
          handleClick={handleScroll}
          containerStyles='bg-primary-blue text-white rounded-xl mt-10 '
          title='Explore Cars'
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={'/hero.png'} alt='hero' fill className='object-contain' />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  )
}

export default Hero