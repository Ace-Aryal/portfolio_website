// import Image from 'next/image'

import Post from '@/components/molecules/post'
import Project from '@/components/molecules/project'
import Intro from '@/components/organisms/intro'
import { getPosts } from '@/lib/posts'
import { getprojects } from '@/lib/project'
import Link from 'next/link'

export default async function Home() {
  const posts = await getPosts(3)
  const projects = await getprojects(3)
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section className="my-8 max-w-3xl p-4">
        {' '}
        <Intro />
      </section>
      <section className="mt-10 flex w-full max-w-3xl flex-col px-4 py-6">
        <h2 className="title px-1">Recent Projects</h2>
        <Project gridCols="md:grid-cols-3" projects={projects} />
        <Link className="px-4 text-sm text-gray-500 underline" href="/projects">
          All projects
        </Link>
      </section>
      <section className="mt-16 flex max-w-3xl flex-col p-4 px-4">
        <h2 className="title px-1">Recent Posts</h2>
        <Post posts={posts} />
        <Link className="px-4 text-sm text-gray-500 underline" href="/posts">
          All posts
        </Link>
      </section>
    </div>
  )
}
