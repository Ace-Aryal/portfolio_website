import { formatDate } from '@/lib/formatDate'
import { PostMetadata } from '@/lib/posts'
import Link from 'next/link'
import React from 'react'

function Post({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug}>
          <div
            key={post.slug}
            className="my-2 grid w-full grid-cols-6 rounded-lg p-2 px-3 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:dark:bg-gray-800 focus:dark:bg-gray-800 active:dark:bg-gray-800"
          >
            <div className="text-md col-span-4 text-lg font-semibold">{post.title}</div>
            <div className="col-span-2 row-span-2 text-right text-sm text-gray-500 dark:text-gray-400">
              {formatDate(post.date)}
            </div>
            <div className="col-span-4 text-sm text-gray-500 dark:text-gray-400">
              {post.description}
            </div>
          </div>
        </Link>
      ))}
    </ul>
  )
}

export default Post
