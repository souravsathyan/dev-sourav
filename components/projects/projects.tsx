import { ProjectMetadata } from '@/lib/projects'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {projects.map(project => (
        <li key={project.slug}>
          <Link href={`/projects/${project.slug}`} className='block h-full'>
            <Card className='group flex h-full flex-col p-6 transition-all duration-300 ease-in-out hover:shadow-md'>
              <CardContent className='flex flex-1 flex-col space-y-4 p-0'>
                <div className='relative flex-1'>
                  {/* Summary */}
                  <div className='transition-opacity duration-300 ease-in-out group-hover:opacity-0'>
                    <CardTitle className='text-xl font-semibold'>
                      {project.title}
                    </CardTitle>
                    <p className='mt-4 text-sm text-muted-foreground'>
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className='absolute top-0 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                    {project.tech.map((skill, index) => (
                      <span
                        key={index}
                        className='inline-block rounded-full bg-gray-500 px-2 py-1 text-xs font-medium text-gray-800 text-white dark:bg-gray-100 dark:text-gray-800'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className='mt-6 flex items-center justify-end p-0'>
                <Button
                  size='sm'
                  className='opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                >
                  Explore
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  )
}
