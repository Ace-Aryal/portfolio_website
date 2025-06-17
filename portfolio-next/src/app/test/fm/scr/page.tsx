'use client'
import { motion, useScroll } from 'motion/react'
import React, { useRef } from 'react'

const LongPage = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  return (
    <div className="w-full scroll-smooth text-gray-900">
      {/* Section 1: Hero */}
      <section className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-6 text-white">
        <div className="max-w-2xl text-center">
          <h1 className="mb-4 text-5xl font-bold">Welcome to My Web Playground</h1>
          <p className="mb-6 text-xl">
            Exploring the boundaries of design, performance, and accessibility.
          </p>
          <button className="rounded bg-white px-6 py-3 font-semibold text-indigo-600 shadow hover:bg-gray-100">
            Explore More
          </button>
        </div>
      </section>

      {/* Section 2: Image Gallery */}
      <motion.section
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        ref={ref}
        className="h-screen bg-white px-6 py-16"
      >
        <h2 className="mb-12 text-center text-4xl font-bold">Snapshots</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {['tech', 'code', 'design', 'website', 'ui', 'developer'].map((tag) => (
            <img
              key={tag}
              src={`https://source.unsplash.com/random/400x300?${tag}`}
              alt={tag}
              className="h-[200px] w-full rounded object-cover shadow-md"
            />
          ))}
        </div>
      </motion.section>

      {/* Section 3: Feature Cards */}
      <section className="h-screen bg-gray-50 px-6 py-16">
        <h2 className="mb-12 text-center text-4xl font-bold">What I Do</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: 'Frontend Development',
              desc: 'Crafting responsive UIs with React, Tailwind, and modern CSS.',
            },
            {
              title: 'Backend Logic',
              desc: 'Building scalable APIs using Node.js, Express, and MongoDB.',
            },
            {
              title: 'Tooling & DevOps',
              desc: 'Git, Vercel, Postman, Prisma, and performance optimization.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-lg bg-white p-6 shadow transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Contact Form */}
      <section className="flex h-screen items-center justify-center bg-gradient-to-tr from-zinc-800 to-zinc-900 px-6 text-white">
        <div className="w-full max-w-xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Lets Work Together</h2>
          <p className="mb-8 text-lg">
            Got an idea or project in mind? I’d love to help bring it to life.
          </p>
          <form className="space-y-4 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded border border-zinc-600 bg-zinc-700 px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded border border-zinc-600 bg-zinc-700 px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full rounded border border-zinc-600 bg-zinc-700 px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded bg-purple-600 py-3 font-semibold text-white hover:bg-purple-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LongPage
