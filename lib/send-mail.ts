'use server'
import nodemailer from 'nodemailer'

const USER_GMAIL = process.env.GMAIL
const APP_PASS = process.env.APP_KEY

export async function createContactNotification(
  name: string,
  email: string,
  message: string
): Promise<string> {
  return `
      <div class="notification">
        <h2>Contact Notification</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Thank you for reaching out to us! We will get back to you soon.</p>
      </div>
    `
}

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: true,
  auth: {
    user: USER_GMAIL,
    pass: APP_PASS
  }
})
