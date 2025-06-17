'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { TTechStack } from '../organisms/tech-stack'
import { motion } from 'motion/react'
import { fadeInAnimationVariants } from '@/lib/framer-motion'
import { twMerge } from 'tailwind-merge'

function TechStackItem({ techStack, index }: { techStack: TTechStack; index: number }) {
  const [isHovering, setIsHovernig] = useState(false)
  return (
    <motion.li
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div
        onTouchStart={() => {
          setIsHovernig(true)
        }}
        onTouchEnd={() => {
          setIsHovernig(false)
        }}
        className="group aspect-square min-h-32 [perspective:1000px]"
      >
        <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)] group-active:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 flex items-center justify-center rounded-lg text-white [backface-visibility:hidden]">
            <Image
              width={150}
              height={150}
              src={techStack.image}
              alt={techStack.title}
              className={`rounded-lg object-contain ${techStack.title.toLowerCase().replaceAll(' ', '') === 'next.js' || techStack.title.toLowerCase().replaceAll(' ', '') === 'shadcnui' ? 'dark:invert' : ''}`}
            ></Image>
          </div>

          {/* Back */}
          <div
            className={twMerge(
              `absolute inset-0 flex items-center justify-center rounded-lg bg-gray-200 text-white [backface-visibility:hidden] dark:bg-zinc-800`,
              isHovering ? '[transform:rotateY(0deg)]' : '[transform:rotateY(180deg)]'
            )}
          >
            <div className="flex flex-col p-2">
              <h3 className="font-serif text-lg font-semibold text-zinc-700 dark:text-zinc-200">
                {techStack.title}
              </h3>
              <span className="text-md text-gray-500 dark:text-gray-400">
                level: {techStack.level}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  )
}

export default TechStackItem
