import ContactForm from '@/components/contact-form'
import React from 'react'

function ContactPage() {
  return (
    <section className='min-h-screen pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title'>Let&apos;s get in touch</h1>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactPage
