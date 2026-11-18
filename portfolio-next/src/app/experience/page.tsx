import type { Metadata } from 'next'
import VerticalTimeline from '@/components/organisms/vertical-timeline'

export const metadata: Metadata = {
  title: 'Experience — Dipesh Aryal',
  description:
    'Professional and learning experience of Dipesh Aryal, software engineer and AI-focused builder.',
}

export default function ExperiencePage() {
  return (
    <section className="terminal-section terminal-project-page">
      <div className="terminal-section-heading">
        <span>02</span>
        <h1>Experience</h1>
      </div>
      <VerticalTimeline />
    </section>
  )
}
