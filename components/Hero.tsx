'use client'

import React from 'react'
import Image from 'next/image'

import { CustomButton } from '.'

const Hero = () => {
  const handleScroll = () => console.log('handle scroll')
  
  return (
    <div className='hero' >
      <div className='flex-1 pt-36 padding-x ' >
        <h1 className="hero__title">
          Find your or book your car -- quick and easy!
        </h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <CustomButton title='Book now' />
      </div>
    </div>
  )
}

export default Hero