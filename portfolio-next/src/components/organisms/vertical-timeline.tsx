import Link from 'next/link'
import React from 'react'

function VerticalTimeline() {
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

  const timelineArray: Timeline[] = [
    {
      date: 'July 2023',
      title: 'Enrolled in +2 Science at NSS',
      summary:
        'Took the first step toward a future in technology by choosing the Science stream, laying the foundation for computer science.',
    },
    {
      date: 'August 2023',
      title: 'Discovered Web Design Basics',
      summary:
        'Started my journey in web development with HTML and CSS — the building blocks of the web.',
    },
    {
      date: 'October 2023',
      title: 'First Programming Language: C',
      summary:
        'Gained my first programming experience by learning C, which helped me understand core programming logic and structure.',
    },
    {
      date: 'February 2024',
      title: 'Found My Path in Full-Stack Web Development',
      summary:
        'Came across the bigger picture of web development and started learning full-stack development through Angela Yu’s bootcamp on Udemy.',
    },
    {
      date: 'March 2024',
      title: 'Built My First Portfolio Website',
      summary:
        'Used Tailwind CSS to design and develop my first personal portfolio website to showcase my journey and projects.',
      link: {
        label: 'View Portfolio',
        href: 'https://ace-aryal.github.io/dipesh_aryal_profile',
      },
    },
    {
      date: 'July – November 2024',
      title: 'Mastered JavaScript Through Projects',
      summary:
        'Focused on learning JavaScript deeply by building 30+ projects covering DOM manipulation, APIs, games, and more.',
      link: {
        label: 'View Projects',
        href: 'https://ace-aryal.github.io/Learning_Web/',
      },
    },
    {
      date: 'December 2024',
      title: 'Started Learning React',
      summary:
        'Began learning React to build dynamic, component-based user interfaces with reusable logic.',
    },
    {
      date: 'January – May 2025',
      title: 'Explored React Ecosystem & Serverless Backend',
      summary:
        'Learned advanced React concepts, state management with Redux Toolkit, and backend integration with Appwrite. Built multiple full-stack projects.',
      link: {
        label: 'View Xpenso App',
        href: 'https://expense-tracker-app-theta-one.vercel.app',
      },
    },
    {
      date: 'June 2025 – Present',
      title: 'Diving Into Next.js with TypeScript',
      summary:
        'Currently learning production-grade web development using Next.js and TypeScript to build scalable full-stack applications.',
    },
    {
      date: 'Upcoming',
      title: 'Looking Ahead',
      summary:
        'Excited to work on real-world projects, contribute to open source, and continue growing as a full-stack developer.',
    },
  ]

  return (
    <div className="reveal flex w-full justify-center px-4">
      <h2 className="hidden px-4 font-serif text-lg font-semibold sm:inline-block">Timeline</h2>
      <ol className="relative max-w-3xl border-s border-gray-300 dark:border-gray-700">
        {timelineArray.map((timeline, index) => (
          <li key={index} className="ms-4 mb-10">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300 dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm leading-none font-normal text-gray-500 dark:text-gray-400">
              {timeline.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {timeline.title}
            </h3>
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
          </li>
        ))}
      </ol>
    </div>
  )
}

export default VerticalTimeline
