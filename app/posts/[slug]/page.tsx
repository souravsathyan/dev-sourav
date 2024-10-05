import React from 'react'

async function Page({params}: {params: {slug: string}}) {
    const {slug} = params
    const content = await getPostBySlug(slug)
  return (
    <div>Page</div>
  )
}

export default Page