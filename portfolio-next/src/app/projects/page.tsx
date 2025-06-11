import React from 'react'
import { getprojects } from '@/lib/project'
import Project from '@/components/molecules/project'

async function AllProjectsPage() {
  const projects = await getprojects() // just like fetching data
  return (
    <section className="mt-4 flex w-full flex-col px-2 py-6">
      <h2 className="title">All Projects</h2>
      <Project projects={projects} />
    </section>
  )
}

export default AllProjectsPage
