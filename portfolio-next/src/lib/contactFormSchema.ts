import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .min(2, { message: 'Name must be at least 2 chars' }),
  email: z.string().min(1, { message: 'Message is required' }).email(),
  message: z.string().min(1, { message: 'Message is required' }),
})
