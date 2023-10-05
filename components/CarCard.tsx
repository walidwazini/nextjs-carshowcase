"use client"

import Image from "next/image"
import React, { useState } from 'react'
import { BsFuelPumpFill } from 'react-icons/bs'
import { PiSteeringWheelFill } from 'react-icons/pi'
import { AiFillRightSquare, AiFillCaretRight } from 'react-icons/ai'
import { GiCarWheel } from 'react-icons/gi'

import { CustomButton } from ".";
import CarDetails from "./CarDetails"
import { calculateCarRent } from "@/utils";
import { CarProps } from "@/types"

interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year)
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={'/hero.png'} alt='car model' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <PiSteeringWheelFill size={20} />
            <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <GiCarWheel style={{ color: 'orange' }} size={20} />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <BsFuelPumpFill style={{ color: 'green' }} size={20} />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon={<AiFillCaretRight size={20} />}
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard