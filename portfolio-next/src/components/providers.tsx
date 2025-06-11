"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'
function Providers({children}:{
    children : React.ReactNode
}) {
  return (
    <ThemeProvider
    enableSystem
    attribute="class"
     defaultTheme='system'
     disableTransitionOnChange
    >
        {children}
    </ThemeProvider>
  )
}

export default Providers