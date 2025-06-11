import path from 'path'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
const rootDirectory = path.join(process.cwd(), 'src', 'content', 'projects')

export type projectMetaData = {
  image?: string
  title?: string
  techsUsed?: string
  date?: string
  description?: string

  slug: string
}
export type Project = {
  metadata: projectMetaData
  content: string
}
export async function getprojectBySlug(slug: string): Promise<Project | null> {
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
export async function getprojects(limit?: number): Promise<projectMetaData[]> {
  const files = readdirSync(rootDirectory) // returns array of all the files path
  const projects = files
    .map((file) => getMetadata(file))
    .sort((a, b) => {
      if (new Date(a.date ?? '') < new Date(b.date ?? '')) {
        return 1
      } else {
        return -1
      }
    })
  if (limit) {
    return projects.slice(0, limit)
  }
  return projects
}

export function getMetadata(filepath: string): projectMetaData {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = readFileSync(filePath, 'utf-8')
  const { data } = matter(fileContent)
  return { ...data, slug }
}
