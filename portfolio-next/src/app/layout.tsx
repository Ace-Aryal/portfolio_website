import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dipesh Aryal — Software Engineer',
  description:
    'Portfolio of Dipesh Aryal, a software engineer building intelligent AI-focused web products.',
  keywords: [
    'Dipesh Aryal',
    'Software Engineer',
    'AI Developer',
    'Web Developer',
    'React Developer',
    'Next.js Portfolio',
    'MERN Stack',
    'JavaScript Developer',
    'Tailwind CSS',
    'Frontend Developer',
    'Backend Developer',
    'Nepal Developer',
  ],
  authors: [{ name: 'Dipesh Aryal', url: 'https://aryaldipesh.com.np' }],
  creator: 'Dipesh Aryal',
  metadataBase: new URL('https://aryaldipesh.com.np'),
  openGraph: {
    title: 'Dipesh Aryal — Software Engineer',
    description:
      'Explore the projects, blog posts, and skills of Dipesh Aryal — a software engineer focused on AI and full-stack products.',
    url: 'https://aryaldipesh.com.np',
    siteName: 'Dipesh Aryal Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80', // from Unsplash
        width: 1200,
        height: 630,
        alt: 'Laptop desk with code and coffee',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dipesh Aryal — Software Engineer',
    description:
      "Visit Dipesh Aryal's portfolio showcasing React, Next.js, MongoDB projects and more.",
    creator: '@yourTwitterHandle', // optional
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // from Unsplash
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />
          <main className="terminal-shell">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
