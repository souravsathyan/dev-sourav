'use client'

import { newsLetterFormSchema } from '@/lib/schemas'
import React from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { Card, CardContent } from './ui/card'
import { subscribeMail } from '@/lib/send-mail'

type Inputs = z.infer<typeof newsLetterFormSchema>

function NewsLetterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(newsLetterFormSchema),
    defaultValues: {
      email: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    console.log(data)
    const result = await subscribeMail(data)

    if (result.error) {
      toast.error('An error occurred. Please try again later.')
    }

    toast.success(
      'Thank you for your message. We will get back to you shortly.'
    )

    reset()
  }

  return (
    <section>
      <Card className='rounded-lg bg-gradient-to-r from-violet-950  to-blue-700 '>
        <CardContent className='flex flex-col gap-8 pt-6 md:flex-row md:justify-center'>
          <div>
            <h2 className='text-2xl font-bold'>Subscribe to my newsletter</h2>
            <p className='text-base text-muted-foreground'>
              Get updates on my latest posts and projects
            </p>
          </div>
          <form
            className='flex flex-col items-start gap-3'
            onSubmit={handleSubmit(processForm)}
          >
            <div className='w-full'>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                placeholder='Enter your email'
                className='w-full'
                {...register('email')}
              />
              {errors.email?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className='w-full'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full disabled:opacity-50'
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            <div>
              <p className='text-xs text-muted-foreground'>
                We care about your data. Read our{' '}
                <Link href='/privacy' className='font-bold'>
                  privacy&nbsp;policy
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export default NewsLetterForm
