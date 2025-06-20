'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from 'lucide-react'
function ThemeToggler() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait until after component mounts to show theme-dependent UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      onClick={() => {
        const currentTheme = resolvedTheme || theme
        setTheme(currentTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeToggler
