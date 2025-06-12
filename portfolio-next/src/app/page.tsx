// import Image from 'next/image'

import Post from '@/components/molecules/post'
import Project from '@/components/molecules/project'
import Intro from '@/components/organisms/intro'
import { getPosts } from '@/lib/posts'
import { getprojects } from '@/lib/project'

export default async function Home() {
  const posts = await getPosts(3)
  const projects = await getprojects(3)
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section className="my-8 max-w-3xl p-4">
        {' '}
        <Intro />
      </section>
      <section className="mt-4 flex w-full max-w-3xl flex-col px-2 py-6">
        <h2 className="title px-1">Recent Projects</h2>
        <Project gridCols="md:grid-cols-3" projects={projects} />
      </section>
      <section className="mt-4 flex max-w-3xl flex-col p-4 px-2">
        <h2 className="title px-1">Recent Posts</h2>
        <Post posts={posts} />
      </section>
    </div>
  )
}
