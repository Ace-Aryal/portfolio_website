'use client'
import { motion, useScroll, useTransform } from 'motion/react'
import Link from 'next/link'
import React, { useRef } from 'react'
type Site = {
  href: string
  label: string | 'Learn More'
}
type Timeline = {
  date: string
  title: string
  summary: string
  link?: Site
}

function VerticalTimelineItem({ timeline }: { timeline: Timeline }) {
  const ref = useRef<HTMLLIElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.li
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      className="ms-4 mb-10"
      ref={ref}
    >
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300 dark:border-gray-900 dark:bg-gray-700" />
      <time className="mb-1 text-sm leading-none font-normal text-gray-500 dark:text-gray-400">
        {timeline.date}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{timeline.title}</h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {timeline.summary}
      </p>
      {timeline.link ? (
        <Link
          href={timeline.link.href}
          className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-blue-700 focus:bg-gray-100 focus:text-blue-700 focus:ring-4 focus:ring-gray-100 focus:outline-none active:bg-gray-100 active:text-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:text-white dark:focus:ring-gray-700 dark:active:bg-gray-700 dark:active:text-white"
        >
          {timeline.link.label}
          <svg
            className="ms-2 h-3 w-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      ) : null}
    </motion.li>
  )
}

export default VerticalTimelineItem
