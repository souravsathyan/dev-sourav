import Intro from '@/components/intro'
import React from 'react'

function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <h1 className='text-3xl font-bold'>
          <Intro />
        </h1>
      </div>
    </section>
  )
}

export default Home
