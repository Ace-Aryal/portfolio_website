import { highlight } from 'sugar-high'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pre: ({ children }: any) => {
    const code = children?.props?.children || ''
    return <CodeBlock>{code}</CodeBlock>
  },
  Image,
  Link,
}
