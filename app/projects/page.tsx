import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectPage() {
  const projects = await getProjects()
  return (
    <section className='min-h-screen pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  )
}
