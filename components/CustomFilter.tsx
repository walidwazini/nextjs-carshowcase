"use client"

import React, { Fragment, MutableRefObject, useRef, useState } from 'react'
import Image from 'next/image'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { BsChevronBarExpand } from 'react-icons/bs'

import { CustomFilterProps } from '@/types'

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState(options[0])

  const optionRef = useRef<any>()

  const handleUpdateParams = () => {
  }

  return (
    <div className='w-fit ' >
      <Listbox
        value={selected}
        onChange={ev => setSelected(ev)}
      >
        <div className='relative w-fit z-10  ' >
          <Listbox.Button className={'custom-filter__btn'} >
            <span className='block truncate ' >
              {selected.title}
            </span>
            <BsChevronBarExpand />
          </Listbox.Button>
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className={'custom-filter__options'} >
              {options.map(option => (
                <Listbox.Option
                  // ref={optionRef}
                  key={option.title} value={option}
                  className={
                    ({ active }) => `select-none relative cursor-default py-2 px-4 
                ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`
                  }
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'} `} >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter