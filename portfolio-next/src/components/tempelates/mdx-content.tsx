'use client'

import { highlight } from 'sugar-high'

import React from 'react'

type CodeBlockProps = {
  children: string
}

function CodeBlock({ children }: CodeBlockProps) {
  const html = highlight(children)
  return (
    <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white">
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  )
}

export const components = {
  pre: ({ children }: any) => {
    const code = children?.props?.children || ''
    return <CodeBlock>{code}</CodeBlock>
  },
}
