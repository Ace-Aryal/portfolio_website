import React from 'react'
import { getPosts } from '@/lib/posts'
import PostWithSerarch from '@/components/molecules/post-with-search'

async function AllPostPage() {
  const posts = await getPosts() // just like fetching data
  return (
    <section className="mt-4 flex w-full flex-col px-2 py-6">
      <h2 className="title">All Posts</h2>
      <PostWithSerarch posts={posts} />
    </section>
  )
}

export default AllPostPage
