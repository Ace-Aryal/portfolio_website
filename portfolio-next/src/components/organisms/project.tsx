import { projectMetaData } from '@/lib/project'

import React from 'react'
import ProjectCard from '../molecules/project-item'

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
      {projects.map((project, index) => (
        <ProjectCard index={index} key={project.slug} project={project} />
      ))}
    </ul>
  )
}

export default Project
