import { getPosts } from '@/lib/posts'
import Posts from './posts'
import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'

/**
 *
 *
 * @export
 * @return {*}
 */
export default async function RecentPosts() {
  const posts = await getPosts(4)
  return (
    <section className='pb-24'>
      <div>
        <h2 className='mb-2 text-2xl'>Recent Posts</h2>
        <div className='flex justify-end'>
          <Link
            href='/posts'
            className='mb-2 mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-sky-400/100'
          >
            <span>All posts</span>
            <ArrowRightIcon />
          </Link>
        </div>
        <Posts posts={posts} />
      </div>
    </section>
  )
}
