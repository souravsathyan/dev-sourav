'use client'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import React from 'react'
import { motion } from 'framer-motion'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card'
import { TimelineData } from '@/lib/timelineData'

type ItemProps = {
  item: TimelineData
}

const TimelineItem = ({ item }: ItemProps) => {
  return (
    <motion.li
      className='relative'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeIn' }}
    >
      <ChevronRightIcon className='absolute -left-[9px] top-2.5 h-5 w-5' />
      <Card className='ml-4 max-w-screen-sm border-black/10 text-black dark:border-white/10 dark:text-white'>
        <CardHeader>
          <CardTitle className='text-lg'>{item.text}</CardTitle>
          <CardDescription className='mt-1 text-sm text-gray-600 dark:text-gray-300'>
            {item.position} | {item.location}
          </CardDescription>
          <CardDescription className='mt-1 text-sm text-gray-600 dark:text-gray-300'>
            {item.startDate} - {item.endDate}
            {item.totalExp && ` (${item.totalExp})`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {item.achievement && (
            <div className='mt-2'>
              <h4 className='text-sm font-medium'>Achievements:</h4>
              <ul className='mt-1 list-disc pl-5 text-sm'>
                {item.achievement.map((ach, index) => (
                  <li
                    key={index}
                    className='text-sm font-light text-muted-foreground'
                  >
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.skills && (
            <div className='mt-4'>
              <h4 className='text-sm font-medium'>Skills:</h4>
              <div className='mt-1 flex flex-wrap gap-2'>
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className='inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.li>
  )
}

export default TimelineItem
