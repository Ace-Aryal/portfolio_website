import React from 'react'
import VerticalTimelineItem from '../molecules/vertical-timeline-item'

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
      link: {
        label: 'View Xpenso App',
        href: 'https://expense-tracker-app-theta-one.vercel.app',
      },
    },
    {
      date: 'January – May 2025',
      title: 'Explored React Ecosystem & Serverless Backend',
      summary:
        'Learned advanced React concepts, state management with Redux Toolkit, and backend integration with Appwrite. Built multiple full-stack projects.',
      link: {
        label: 'View School Mangement App',
        href: 'https://ace-school.vercel.app/',
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
    <div className="flex w-full justify-center px-4">
      <h2 className="hidden px-4 font-serif text-lg font-semibold sm:inline-block">Timeline</h2>
      <ol className="relative max-w-3xl border-s border-gray-300 dark:border-gray-700">
        {timelineArray.map((timeline, index) => (
          <VerticalTimelineItem key={index} timeline={timeline} />
        ))}
      </ol>
    </div>
  )
}

export default VerticalTimeline
