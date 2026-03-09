import React from 'react'
import { getPosts } from '@/lib/posts'
import PostWithSerarch from '@/components/molecules/post-with-search'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

async function AllPostPage() {
  const posts = await getPosts() // just like fetching data
  return (
    <section className="mt-4 flex w-full flex-col px-2 py-6 container mx-auto max-w-4xl">
      <div className='flex items-center justify-between'>

      <h2 className="title">All Posts</h2>
      <Link href={"/"} className='text-sm flex gap-1.5 items-center text-gray-600 hover:text-gray-800'>
       <ArrowRight size={14} className='mt-1'/>
        <span>
        Go Home
        </span>
        </Link>
      </div>
      <PostWithSerarch posts={posts} />
    </section>
  )
}

export default AllPostPage
