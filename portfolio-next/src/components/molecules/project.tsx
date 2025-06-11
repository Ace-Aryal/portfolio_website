import { formatDate } from '@/lib/formatDate'
import { projectMetaData } from '@/lib/project'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Project({ projects }: { projects: projectMetaData[] }) {
  return (
    <ul className="my-5 grid grid-cols-1 justify-center gap-5 sm:grid-cols-3 md:grid-cols-4">
      {projects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project.slug}
          className="aspect-square min-h-48 rounded-lg border-gray-500 transition-all hover:border-4"
        >
          <div className="group relative aspect-square h-full w-full rounded-lg hover:bg-gray-100 hover:dark:bg-gray-800">
            <div className="absolute h-full w-full group-hover:opacity-25">
              <Image
                fill
                alt={project?.title || 'project image'}
                src={project.image || ''}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="absolute bottom-0 hidden p-1 text-zinc-900 group-hover:block dark:text-white">
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
