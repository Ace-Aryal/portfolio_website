import Link from 'next/link'
import { ArrowUpRight, Bot, Braces, Database, ExternalLink } from 'lucide-react'

function AllProjectsPage() {
  return (
    <section className="terminal-section terminal-project-page">
      <div className="terminal-section-heading">
        <span>03</span>
        <h1>Selected project</h1>
      </div>

      <article className="terminal-featured-project">
        <div className="project-terminal-bar">
          <div className="terminal-dots"><i /><i /><i /></div>
          <span>~/projects/csca.ai</span>
          <span className="status-live">LIVE</span>
        </div>

        <div className="project-content">
          <div>
            <p className="project-kicker">AI-POWERED PLATFORM</p>
            <h2>csca.ai</h2>
            <p className="project-description">
              An AI-powered exam preparation and lead management platform that helps international
              students prepare for the China Scholastic Competency Assessment across Mathematics,
              Physics, and Chemistry. I contributed to the Next.js application, including exam
              preparation experiences, university and results information, CRM workflows, and
              automated communication systems.
            </p>

            <div className="project-actions">
              <Link href="https://csca.ai" target="_blank" rel="noreferrer" className="terminal-primary">
                open_project <ArrowUpRight size={16} />
              </Link>
              <span className="terminal-availability">[ production ]</span>
            </div>
          </div>

          <div className="project-system">
            <p className="project-system-title">$ system --capabilities</p>
            <div>
              <span><Bot size={18} /> AI experiences</span>
              <span><Braces size={18} /> Software engineering</span>
              <span><Database size={18} /> Intelligent data systems</span>
            </div>
            <Link href="https://csca.ai" target="_blank" rel="noreferrer">
              csca.ai <ExternalLink size={15} />
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}

export default AllProjectsPage
