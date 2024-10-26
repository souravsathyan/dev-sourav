'use client'

import { ContactFormSchema } from '@/lib/schemas'
import React from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import Link from 'next/link'

type Inputs = z.infer<typeof ContactFormSchema>

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const response = await result.json()

    if (response.data.result.success === false) {
      toast.error(response.data.result.message)
      return
    }

    toast.success(
      'Thank you for your message. We will get back to you shortly.'
    )

    reset()
  }

  return (
    <div className='relative'>
      <form
        onSubmit={handleSubmit(processForm)}
        className='mt-16 lg:flex-auto'
        noValidate
      >
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          <div className='col-span-1 sm:col-span-1'>
            <Input
              id='name'
              type='text'
              placeholder='Name'
              {...register('name')}
              autoComplete='given-name'
            />
            {errors.name?.message && (
              <p className='ml-1 mt-2 text-sm text-rose-400'>
                {errors.name.message}
              </p>
            )}
          </div>
          <div className='col-span-1 sm:col-span-1'>
            <Input
              id='email'
              type='text'
              placeholder='Email'
              {...register('email')}
              autoComplete='given-email'
            />
            {errors.email?.message && (
              <p className='ml-1 mt-2 text-sm text-rose-400'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className='col-span-1 sm:col-span-2'>
            <Textarea
              rows={4}
              placeholder='Message..'
              {...register('message')}
            />
            {errors.message?.message && (
              <p className='ml-1 mt-2 text-sm text-rose-400'>
                {errors.message.message}
              </p>
            )}
          </div>
          <div className='col-span-1 mt-6 sm:col-span-2'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full disabled:opacity-50'
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </div>
        <p className='mt-4 text-xs text-muted-foreground'>
          By submitting this form, I agree to the terms and conditions&nbsp;
          <Link href='/privacy' target='_blank' className='font-bold'>
            privacy&nbsp;policy
          </Link>
        </p>
      </form>
    </div>
  )
}

export default ContactForm
