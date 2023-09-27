import Image from 'next/image'

import { Hero, SearchBar } from '@/components'

export default function Home() {
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
      </div>
    </main>
  )
}
