'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import Post from './post'
import type { PostMetadata } from '@/lib/posts'

function PostWithSerarch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('')
  const filteresPosts = posts.filter(
    (post) =>
      post.description?.includes(query) || post.title?.includes(query) || post.slug?.includes(query)
  )
  const datalistOptions = posts.map((post) => post.title)
  return (
    <div className="mt-6 flex w-full flex-col">
      <div className="flex justify-between px-3">
        <Input
          placeholder="Search posts.."
          className="w-4/5"
          list="posts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <datalist id="posts">
          {datalistOptions.map((datalist) => (
            <option key={datalist} value={datalist}></option>
          ))}
        </datalist>
        <Button
          onClick={() => setQuery('')}
          className={` ${query.length > 0 ? '' : 'hidden'}`}
          variant={'secondary'}
        >
          <X />
          Reset
          <span className="sr-only">Reset button</span>
        </Button>
      </div>
      <Post posts={filteresPosts} />
    </div>
  )
}

export default PostWithSerarch
