'use client'

import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'

interface Props {
  title: string,
  btnType?: 'button' | 'submit',
  containerStyles?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>
}


const CustomButton: NextPage<Props> = ({ title, btnType, containerStyles, handleClick }) => {
  // const { title } = props
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles} `}
      onClick={() => { }}
    >
      <span className={`flex-1`} >
        {title}
      </span>
    </button>
  )
}

export default CustomButton