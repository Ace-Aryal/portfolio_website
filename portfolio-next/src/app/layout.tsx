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
  title: 'Dipesh Aryal — Full Stack Web Developer',
  description:
    'Portfolio of Dipesh Aryal, a passionate full stack web developer skilled in React, Next.js, Tailwind, MongoDB, and more.',
  keywords: [
    'Dipesh Aryal',
    'Full Stack Developer',
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
    title: 'Dipesh Aryal — Full Stack Web Developer',
    description:
      'Explore the projects, blog posts, and skills of Dipesh Aryal — a dedicated full stack developer.',
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
    title: 'Dipesh Aryal — Full Stack Developer',
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
          <div className="flex w-full flex-col items-center">
            <div className="container flex min-h-screen flex-col">
              <Header />
              <main className="flex grow flex-col"> {children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
