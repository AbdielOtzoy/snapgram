import * as z from "zod"

export const SignupValidationSchema = z.object({
    name: z.string().min(2, { message: 'Too short' }),
    username: z.string().min(2, { message: 'Too short' }),
    email: z.string().email({ message: 'Invalid email' }),
    password: z.string().min(6, { message: 'Password must be at least 8 characters.' }),
})
export const SigninValidationSchema = z.object({
    email: z.string().email({ message: 'Invalid email' }),
    password: z.string().min(6, { message: 'Password must be at least 8 characters.' }),
})
export const PostValidationSchema = z.object({
    caption: z.string().min(2, { message: 'Too short' }).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2, { message: 'Too short' }).max(100),
    tags: z.string()
})