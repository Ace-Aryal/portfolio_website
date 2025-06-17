'use client'
import { projectMetaData } from '@/lib/project'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'
import { motion } from 'motion/react'
import { fadeInAnimationVariants } from '@/lib/framer-motion'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

function ProjectCard({ project, index }: { project: projectMetaData; index: number }) {
  const [isHovernig, setIsHovering] = useState(false)
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
      className="h-full w-full rounded-lg border-0 border-gray-500 hover:border-4 hover:transition-all focus:border-4 active:border-4"
    >
      <Link href={`/projects/${project.slug}`} className="aspect-square min-h-48 w-full rounded-lg">
        <div className="group relative aspect-square h-full w-full rounded-lg hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:dark:bg-gray-800 focus:dark:bg-gray-800 active:dark:bg-gray-800">
          <div
            className={twMerge(
              `absolute h-full w-full group-hover:opacity-25 group-focus:opacity-25 group-active:opacity-25`,
              isHovernig ? 'opacity-25' : ''
            )}
          >
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
          <div
            className={twMerge(
              `absolute bottom-0 hidden p-1 text-zinc-900 group-hover:block group-focus:block group-active:block dark:text-white`,
              isHovernig ? 'block' : ''
            )}
          >
            <div className="text-md col-span-4 text-lg font-semibold">{project.title}</div>
            <div className="col-span-2 row-span-2 text-right text-sm">
              {formatDate(project.date)}
            </div>
            <div className="col-span-4 text-sm">{project.description}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard
