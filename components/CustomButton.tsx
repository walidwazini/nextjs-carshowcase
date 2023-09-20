'use client'

import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'

interface Props {
  title: string,
  containerStyles?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>
}


const CustomButton: NextPage<Props> = ({ title, containerStyles, handleClick }) => {
  // const { title } = props
  return (
    <button
      disabled={false}
      type='button'
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