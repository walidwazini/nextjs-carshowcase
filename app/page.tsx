import Image from 'next/image'

import { Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'

export default async function Home() {
  const allCars = await fetchCars()

  const isDataEmpty = !Array.isArray(allCars)
    || allCars.length < 0
    || !allCars

  console.log(allCars)

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
            <div>fuel</div>
            <div>year</div>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, i) => (
                <div key={`${car.mpg}-${1 + i}`} >
                  {car.model}
                </div>
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
