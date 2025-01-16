'use server'
import { z } from 'zod'
import { ContactFormSchema, newsLetterFormSchema } from './schemas'
import nodemailer from 'nodemailer'

type ContactFormSchema = z.infer<typeof ContactFormSchema>

export async function sendMail(data: ContactFormSchema) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.APP_KEY
      }
    })

    const { name, email, message } = result.data

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL,
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div class="notification">
          <h2>Contact Notification</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p>Thank you for reaching out to us! We will get back to you soon.</p>
        </div>
      `
    })

    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

export async function subscribeMail(data: { email: string }) {
  const result = newsLetterFormSchema.safeParse(data)
  if (result.error) {
    return { error: result.error.format() }
  }

  return { success: true }
}
