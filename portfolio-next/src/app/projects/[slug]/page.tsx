import { formatDate } from '@/lib/formatDate'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { components } from '@/components/tempelates/mdx-content'
import { getprojectBySlug, getprojects } from '@/lib/project'

export async function generateStaticParams() {
  const projects = await getprojects()
  const slugs = projects.map((project) => {
    return { slug: project.slug }
  })
  return slugs
} // Static Site generation
async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const project = await getprojectBySlug(slug)
  if (!project) {
    notFound()
  }
  const { metadata, content } = project
  const { title, date, description, techsUsed } = metadata
  return (
    <div className="flex w-full flex-col px-2 py-4">
      <div>
        <Link href="/projects" className="text-gray-500">
          <div className="fixed flex items-center gap-2">
            <ArrowLeft size={20} />
            Go to all projects
          </div>
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <div className="prose dark:prose-invert my-4 flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col">
            <h1 className="title mt-4 w-fit py-1">{title}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {techsUsed}/{formatDate(date)}
            </p>
            <p className="my-6 mb-10">{description}</p>
          </div>

          <div className="">
            <MDXRemote source={content} components={components} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
