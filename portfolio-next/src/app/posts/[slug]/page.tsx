import { formatDate } from '@/lib/formatDate'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { components } from '@/components/tempelates/mdx-content'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map((post) => {
    return { slug: post.slug }
  })
  return slugs
} // Static Site generation
async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const post = await getPostBySlug(slug)
  if (!post) {
    notFound()
  }
  const { metadata, content } = post
  const { title, author, date, description } = metadata
  return (
    <div className="flex w-full flex-col px-2 py-4">
      <div>
        <Link href="/posts" className="text-gray-500">
          <div className="fixed flex items-center gap-2">
            <ArrowLeft size={20} />
            Go to all posts
          </div>
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <div className="prose dark:prose-invert my-4 flex w-full flex-col">
          <div className="flex flex-col">
            <h1 className="title mt-4 w-fit py-1">{title}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {author}/{formatDate(date)}
            </p>
            <p className="my-6 mb-10">{description}</p>
          </div>
          <div className="prose dark:prose-invert my-4">
            <MDXRemote source={content} components={components} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
