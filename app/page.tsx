import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import React from 'react'
import RecentProjects from '@/components/recent-projects'

function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <h1 className='text-3xl font-bold'>
          <Intro />
          <RecentPosts />
          <RecentProjects />
        </h1>
      </div>
    </section>
  )
}

export default Home
