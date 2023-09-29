'use client'

import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'

interface Props {
  title: string,
  btnType?: 'button' | 'submit',
  containerStyles?: string,
  textStyles?: string,
  rightIcon?: any,
  handleClick?: MouseEventHandler<HTMLButtonElement>
}


const CustomButton: NextPage<Props> = ({ 
  title, btnType, containerStyles, 
  textStyles, rightIcon, handleClick }) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles} `}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles} `} >
        {title}
      </span>
      <span className='text-white' >
        {rightIcon}
      </span>
    </button>
  )
}

export default CustomButton