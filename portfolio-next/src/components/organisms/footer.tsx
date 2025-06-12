import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="flex w-full items-center gap-10 border-t border-gray-200 py-3 text-center text-xs text-gray-500 sm:flex-row sm:justify-center sm:px-6 dark:border-gray-700 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Dipesh Aryal. All rights reserved.</p>
      <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
        <Link
          href="https://github.com/ace-aryal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={16} className="transition hover:text-black dark:hover:text-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dipesh-aryal-612536272/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} className="transition hover:text-blue-600" />
        </Link>
        <Link href="mailto:aryaldipesh404@gmail.com" aria-label="Email">
          <Mail size={16} className="transition hover:text-red-500" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
