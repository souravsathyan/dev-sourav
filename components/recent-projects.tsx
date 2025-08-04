import Posts from './posts/posts'
import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { getProjects } from '@/lib/projects'

/**
 *
 *
 * @export
 * @return {*}
 */
export default async function RecentProjects() {
  const posts = await getProjects(2)
  console.log({ posts })
  return (
    <section className='mt-12 pb-24'>
      <div>
        <h2 className='mb-4 text-2xl'>Recent Projects</h2>
        <Posts posts={posts} />
        <div className='flex justify-end'>
          <Link
            href='/posts'
            className='mb-2 mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-sky-400/100'
          >
            <span>All projects</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
