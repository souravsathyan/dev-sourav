import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import React from 'react'
import RecentProjects from '@/components/recent-projects'
// import NewsLetterForm from '@/components/news-letter-form'
import ExperienceTimline from '@/components/ExpTimeline/exp-timeline'
import SkillsList from '@/components/skills/skills'

function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-4xl'>
        <Intro />
        <RecentPosts />
        <ExperienceTimline />
        <SkillsList />
        <RecentProjects />
        {/* <NewsLetterForm /> */}
      </div>
    </section>
  )
}

export default Home
