import {z} from 'zod'

export const ContactFormSchema = z.object({
    name:z.string().min(1,{message:'Name is required'}).min(2,{message:'Name is too short'}),
    email:z.string().min(2,{message:'Email is required'}).email('Email is invalid'),
    message:z.string().min(1,{message:'Message is required'}),
})

export const newsLetterFormSchema = z.object({
    email:z.string().min(2,{message:'Email is required'}).email('Email is invalid'),
})