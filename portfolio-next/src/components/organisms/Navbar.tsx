'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'about', href: '/about' },
  { label: 'work', href: '/projects' },
  { label: 'stack', href: '/skills' },
  { label: 'writing', href: '/posts' },
  { label: 'contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="terminal-nav">
      <div className="terminal-nav-inner">
        <Link href="/" className="terminal-brand" aria-label="Dipesh Aryal home">
          <span className="terminal-brand-mark">DA</span>
          <span>dipesh@portfolio</span>
        </Link>

        <nav className="terminal-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname.startsWith(item.href) ? 'active' : ''}
            >
              <span>./</span>{item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="terminal-menu"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <nav className="terminal-mobile-links" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>./</span>{item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
