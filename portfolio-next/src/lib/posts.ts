import path from 'path'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
const rootDirectory = path.join(process.cwd(), 'src', 'content', 'posts')

export type PostMetadata = {
  title?: string
  author?: string
  description?: string
  date?: string
  slug: string
}
export type Post = {
  metadata: PostMetadata
  content: string
}
export async function getPostBySlug(slug: string): Promise<Post | null> {
  console.log(slug)
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    console.log('path', filePath)

    const fileContent = readFileSync(filePath, 'utf-8') // returns file content
    const { data, content } = matter(fileContent) //data=> metadata and content => content
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    console.error(error)
    return null
  }
}
export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  const files = readdirSync(rootDirectory) // returns array of all the files path
  const posts = files
    .map((file) => getMetadata(file))
    .sort((a, b) => {
      if (new Date(a.date ?? '') < new Date(b.date ?? '')) {
        return 1
      } else {
        return -1
      }
    })
  if (limit) {
    return posts.slice(0, limit)
  }
  return posts
}

export function getMetadata(filepath: string): PostMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = readFileSync(filePath, 'utf-8')
  const { data } = matter(fileContent)
  return { ...data, slug }
}
