// 'use server'
// import { z } from 'zod'
// import { ContactFormSchema } from './schemas'
// // import { transporter } from './send-mail'

// type ContactFormSchema = z.infer<typeof ContactFormSchema>

// export async function sendMail(data: ContactFormSchema) {
//   const result = ContactFormSchema.safeParse(data)

//   if (result.error) {
//     return { error: result.error.format() }
//   }

//   try {
//     const { name, email, message } = result.data

//     console.log({ name })

//     await transporter.sendMail({
//       from: process.env.GMAIL,
//       to: email,
//       subject: 'Contact From Submission',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//       html: `
//       <div class="notification">
//         <h2>Contact Notification</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong> ${message}</p>
//         <p>Thank you for reaching out to us! We will get back to you soon.</p>
//       </div>
//     `
//     })

//     return { success: true }
//   } catch (error) {
//     return { error }
//   }
// }
