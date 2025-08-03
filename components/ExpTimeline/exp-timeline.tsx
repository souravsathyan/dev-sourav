import { timelineData } from '@/lib/timelineData'
import TimelineItem from './timeline-item'

export default function ExperienceTimeline() {
  return (
    <section className='mt-12 pb-24'>
      <div>
        <h2 className='mb-4 text-2xl font-bold'>My Experience</h2>
      </div>
      <div className='scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 relative ml-4 max-h-[calc(100vh-100px)] overflow-y-auto border-l border-black pl-4 dark:border-white'>
        <ul className='space-y-10'>
          {timelineData.map(item => (
            <TimelineItem key={item.text} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}
