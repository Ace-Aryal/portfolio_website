'use server'
import { z } from 'zod'
import { contactFormSchema } from './contactFormSchema'
type ContactForm = z.infer<typeof contactFormSchema>
export const sendEmail = async (contactData: ContactForm) => {
  const result = contactFormSchema.safeParse(contactData) // revalidating on server
  if (result.error) {
    return {
      error: result.error.format(),
    }
  }
}
