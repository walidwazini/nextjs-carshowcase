import Image from 'next/image'

import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'
import { HomeProps } from '@/types'
import { fuels, yearsOfProduction } from '@/constants'

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  })

  const isDataEmpty = !Array.isArray(allCars)
    || allCars.length < 0
    || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width ' >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>
            Explore any cars you might like
          </p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title='fuel' options={fuels}  />
            <CustomFilter title='year' options={yearsOfProduction}  />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, i) => (
                <CarCard key={i} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h1 className='text-black text-xl' >Oops, no results</h1>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}
