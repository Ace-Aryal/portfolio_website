import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="terminal-footer">
      <p><span>dipesh@portfolio</span>:~$ exit</p>
      <div className="terminal-footer-links">
        <Link
          href="https://github.com/ace-aryal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github
            size={16}
            className="transition hover:text-black focus:text-black active:text-black dark:hover:text-white dark:focus:text-white dark:active:text-white"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dipesh-red/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin
            size={16}
            className="transition hover:text-blue-600 focus:text-blue-600 active:text-blue-600"
          />
        </Link>
        <Link href="mailto:aryaldipesh404@gmail.com" aria-label="Email">
          <Mail
            size={16}
            className="transition hover:text-red-500 focus:text-red-500 active:text-red-500"
          />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
