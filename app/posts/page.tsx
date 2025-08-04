import PostsWithSearch from '@/components/posts/posts-with-search'
import { getPosts } from '@/lib/posts'
import React from 'react'

async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className='min-h-screen pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}

export default PostsPage
