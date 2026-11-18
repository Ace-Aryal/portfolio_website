import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function PortfolioHome() {
  return (
    <div className="terminal-home">
      <section className="hero-terminal">
        <div className="terminal-window-bar">
          <div className="terminal-dots"><i /><i /><i /></div>
          <span>dipesh — portfolio — zsh</span>
          <span className="terminal-status">● online</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="terminal-prompt"><span>visitor@portfolio</span>:~$ whoami</p>
            <p className="hero-eyebrow">HELLO, WORLD.</p>
            <h1>I’m <strong>Dipesh Aryal.</strong></h1>
            <p className="hero-role">
              Software Engineer <span>/</span> AI-focused Builder
            </p>
            <p className="hero-description">
              I design and engineer intelligent digital products—turning complex ideas into fast,
              reliable software with thoughtful systems and clean code.
            </p>

            <div className="hero-actions">
              <Link href="/projects" className="terminal-primary">
                view_work <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="terminal-secondary">
                start_conversation
              </Link>
            </div>

            <div className="hero-meta">
              <span><MapPin size={14} /> Nepal</span>
              <span><i /> Available for opportunities</span>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-frame">
              <div className="portrait-code" aria-hidden="true">
                <span>01</span> const future = await build();<br />
                <span>02</span> while (curiosity) {'{'}<br />
                <span>03</span> &nbsp;&nbsp;learn();<br />
                <span>04</span> &nbsp;&nbsp;ship();<br />
                <span>05</span> {'}'}
              </div>
              <Image
                src="https://avatars.githubusercontent.com/u/153974691?v=4"
                alt="Dipesh Aryal"
                fill
                priority
                sizes="(max-width: 768px) 280px, 340px"
              />
            </div>
            <div className="portrait-socials">
              <Link href="https://github.com/ace-aryal" target="_blank" aria-label="GitHub"><Github size={17} /></Link>
              <Link href="https://www.linkedin.com/in/dipesh-red/" target="_blank" aria-label="LinkedIn"><Linkedin size={17} /></Link>
              <Link href="mailto:aryaldipesh404@gmail.com" aria-label="Email"><Mail size={17} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="terminal-section">
        <div className="terminal-section-heading">
          <span>01</span>
          <h2>Currently</h2>
        </div>
        <div className="current-grid">
          <article>
            <p className="current-label">ROLE</p>
            <h3>Software Engineer @ WiseAdmit</h3>
            <p>Developing AI-powered applications for university admissions, partners, and students.</p>
          </article>
          <article>
            <p className="current-label">FOCUS</p>
            <h3>AI + full-stack</h3>
            <p>Applied AI, modern web systems, APIs, and production-grade experiences.</p>
          </article>
          <article>
            <p className="current-label">FEATURED</p>
            <Link href="/projects" className="current-project">csca.ai <ArrowRight size={16} /></Link>
            <p>Built exam-preparation, CRM, and AI-powered communication experiences for international students.</p>
          </article>
        </div>
      </section>
    </div>
  )
}
