import Image from 'next/image'
import React from 'react'
import myProfilePic from '@/public/images/authors/dummy.jpg'

function Intro() {
  return (
    <section className='flex items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>
          Hey, I&apos;m Sourav
          <span className='ml-2 text-xl font-light text-sky-400/100 text-opacity-70'>
            /saw·ruhv/
          </span>
        </h1>
        <p className='mt-3 text-sm font-light text-muted-foreground'>
          I&apos;m a software engineer based in Kerala, India. I&apos;m
          passionate about learning new technologies adn sharing knowledge with
          others
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={myProfilePic}
          alt='sourav_k_sathyan'
          width={200}
          height={200}
          priority
        />
      </div>
    </section>
  )
}

export default Intro
