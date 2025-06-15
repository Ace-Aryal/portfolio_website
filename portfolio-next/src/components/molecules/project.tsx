import { formatDate } from '@/lib/formatDate'
import { projectMetaData } from '@/lib/project'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Project({
  projects,
  gridCols = '',
}: {
  projects: projectMetaData[]
  gridCols?: string | ''
}) {
  return (
    <ul
      className={`my-5 grid w-full grid-cols-1 place-items-center content-center justify-center gap-5 px-4 sm:grid-cols-3 ${gridCols || 'md:grid-cols-4'} `}
    >
      {projects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project.slug}
          className="aspect-square min-h-48 w-full rounded-lg border-gray-500 transition-all hover:border-4 focus:border-4 active:border-4"
        >
          <div className="reveal group relative aspect-square h-full w-full rounded-lg hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:dark:bg-gray-800 focus:dark:bg-gray-800 active:dark:bg-gray-800">
            <div className="absolute h-full w-full group-hover:opacity-25 group-focus:opacity-25 group-active:opacity-25">
              <Image
                fill
                alt={project?.title || 'project image'}
                src={
                  project.image ||
                  'https://upload.wikimedia.org/wikipedia/commons/4/49/No-Image-Placeholder.svg'
                }
                className="rounded-lg object-cover"
              />
            </div>
            <div className="absolute bottom-0 hidden p-1 text-zinc-900 group-hover:block group-focus:block group-active:block dark:text-white">
              <div className="text-md col-span-4 text-lg font-semibold">{project.title}</div>
              <div className="col-span-2 row-span-2 text-right text-sm">
                {formatDate(project.date)}
              </div>
              <div className="col-span-4 text-sm">{project.description}</div>
            </div>
          </div>
        </Link>
      ))}
    </ul>
  )
}

export default Project
