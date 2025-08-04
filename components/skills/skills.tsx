'use client'
import { InfiniteMovingCards } from './InfiniteMovingCard'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiReactquery
} from 'react-icons/si'
import { BsRobot } from 'react-icons/bs'
import { IconType } from 'react-icons/lib'

/**
 *
 *
 * @export
 * @return {*}
 */
export type Skill = {
  name: string
  Icon: IconType
  color?: string
}

export const skillList: Skill[] = [
  {
    name: 'React',
    Icon: FaReact,
    color: '#61DAFB'
  },
  {
    name: 'HTML',
    Icon: FaHtml5,
    color: '#E34F26'
  },
  {
    name: 'CSS',
    Icon: FaCss3Alt,
    color: '#1572B6'
  },
  {
    name: 'JavaScript',
    Icon: SiJavascript,
    color: '#F7DF1E'
  },
  {
    name: 'Node.js',
    Icon: FaNodeJs,
    color: '#339933'
  },
  {
    name: 'MongoDB',
    Icon: SiMongodb,
    color: '#47A248'
  },
  {
    name: 'Express',
    Icon: SiExpress
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs
  },
  {
    name: 'Redux',
    Icon: SiRedux,
    color: '#764ABC'
  },
  {
    name: 'TanStack',
    Icon: SiReactquery,
    color: '#FF4154'
  },
  {
    name: 'Prompt Engineering',
    Icon: BsRobot,
    color: '#6C63FF'
  }
]
export default function SkillsList() {
  const firstRow = skillList.slice(0, skillList.length / 2)
  const secondRow = skillList.slice(skillList.length / 2)
  return (
    <section className='mt-12 pb-24'>
      <h2 className='mb-6 text-2xl'>Skills</h2>
      <div className='relative flex max-w-4xl flex-col items-center justify-center overflow-hidden rounded-md antialiased'>
        <InfiniteMovingCards
          items={firstRow}
          direction='right'
          speed='normal'
        />
        <InfiniteMovingCards
          items={secondRow}
          direction='left'
          speed='normal'
        />
      </div>
    </section>
  )
}
