import AboutIntro from '@/components/organisms/aboutIntro'
import VerticalTimeline from '@/components/organisms/vertical-timeline'
import React from 'react'

function AboutPage() {
  return (
    <section className="w-ful l mt-24">
      <div className="mb-30">
        {' '}
        <AboutIntro />
      </div>

      <hr className="mt-8" />
      <VerticalTimeline />
    </section>
  )
}

export default AboutPage
