"use client"

import React, { Fragment, useState } from 'react'
import { FaCarSide } from 'react-icons/fa'
import { Combobox, Transition } from '@headlessui/react'

import { manufacturerList } from '@/constants'

interface Props {
  manufacturer?: string
  setManufacturer?: (manufacturer: string) => void
}

const SearchManufacturer = ({ manufacturer, setManufacturer }: Props) => {
  const [query, setQuery] = useState('')

  const filteredManufacturers = query === ''
    ? manufacturerList
    : manufacturerList.filter(item => (
      item
        .toLocaleLowerCase()
        .replace(/\s+/g, '')  // replace all empty space (s) with nothing
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    ))

  return (
    <div className='search-mftr w-full ' >
      <Combobox value={manufacturer} onChange={setManufacturer} >
        <div className="relative ">
          <Combobox.Button className={'absolute top-[14px] left-[14px] '} >
            <FaCarSide />
          </Combobox.Button>
          <Combobox.Input
            placeholder='Proton'
            className={'search-mtfr__input'}
            onChange={ev => setQuery(ev.target.value)}
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100 '
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option
                  className={`search-mftr__option`}
                  value={query}
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map(item => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) => `relative search-mftr__option 
                ${active ? 'bg-primary-blue' : 'text-gray-800'}`}
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer