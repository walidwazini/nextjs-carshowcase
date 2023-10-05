"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaCarSide } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'

import SearchManufacturer from './SearchManufacturer'

const SearchBarButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses} `} >
    <BiSearchAlt />
  </button>
)

// ------------------------------------------------------------

const SearchBar = () => {

  const router = useRouter()
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')

  const searchHandler = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search bar.')
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  }


  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname);

  }


  return (
    <form className='searchbar' onSubmit={searchHandler} >
      <div className='searchbar__item' >
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        <SearchBarButton otherClasses='sm:hidden' />
      </div>
      <div className="searchbar__item">
        <FaCarSide />
        <input
          type='text' name='model' value={model}
          onChange={ev => setModel(ev.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
        <SearchBarButton otherClasses='sm:hidden' />

      </div>
      <SearchBarButton otherClasses='max-sm:hidden' />

    </form>
  )
}

export default SearchBar