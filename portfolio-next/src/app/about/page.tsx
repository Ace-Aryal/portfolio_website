import AboutIntro from '@/components/organisms/aboutIntro'
import VerticalTimeline from '@/components/organisms/vertical-timeline'
import React from 'react'

function AboutPage() {
  return (
    <section className="mt-10 w-full">
      <AboutIntro />

      <hr className="mt-8" />
      <VerticalTimeline />
    </section>
  )
}

export default AboutPage
