'use client'

import React from 'react'
import Image from 'next/image'
import { NextPage } from 'next'

interface Props {
  title: string
}


const CustomButton: NextPage<Props> = (props) => {
  const { title } = props
  return (
    <button
      disabled={false}
      type='button'
      className={`flex bg-blue-600 rounded-xl text-white flex-row relative justify-center items-center py-3 px-6 outline-none`}
      onClick={() => { }}
    >
      <span className={`flex-1`} >
        {title}
      </span>
    </button>
  )
}

export default CustomButton