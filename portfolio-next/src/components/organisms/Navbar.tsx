'use client'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import ThemeToggler from '../atoms/theme-toggler'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navItems = [
  { label: 'Posts', href: '/posts' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-lg font-bold">
          <Image
            priority
            alt="logo"
            src="https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684adf0d0008c0cdec22/view?project=68465b0b0011b7d2e8b0&mode=admin"
            height={30}
            width={30}
            className="dark:invert"
          />
        </Link>

        {/* Center Nav - Desktop Only */}
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === pathname || (pathname.startsWith(item.href) && pathname !== '/')

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isActive ? 'bg-gray-200 dark:bg-gray-800' : ''
                } rounded-lg px-2 py-1 text-sm font-medium transition-colors hover:text-blue-700 focus:text-blue-700 active:text-blue-700 hover:dark:text-blue-400 focus:dark:text-blue-400 active:dark:text-blue-400`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Side: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          <ThemeToggler />

          {/* Hamburger - Mobile only */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-4 p-6">
                {navItems.map((item) => {
                  const isActive =
                    item.href === pathname || (pathname.startsWith(item.href) && pathname !== '/')

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${
                        isActive ? 'bg-gray-200 dark:bg-gray-800' : ''
                      } rounded-lg px-2 py-1 text-sm font-medium transition-colors hover:text-blue-700 focus:text-blue-700 active:text-blue-700 hover:dark:text-blue-400 focus:dark:text-blue-400 active:dark:text-blue-400`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
