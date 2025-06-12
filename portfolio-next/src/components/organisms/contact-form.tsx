'use client'
import React from 'react'
import { z } from 'zod'
import { contactFormSchema } from '@/lib/contactFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Label } from '../ui/label'
import Spinner from '../atoms/spinner'
// import { sendEmail } from '@/lib/actions'
type Inputs = z.infer<typeof contactFormSchema>
function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(contactFormSchema), // thats all for valiation
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    // from rhf
    // const result = await sendEmail(data)
    // if (result?.error) {
    //   toast.error('Failed to submit form')
    //   return
    // }
    try {
      const response = await fetch('https://formspree.io/f/mgvykzye', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      console.log(data)
      toast.success('Submitted Sucessfully')
      reset()
    } catch (error) {
      console.error(error)
      toast.error('Errors submitting form')
    }
  }
  return (
    <section className="relative isolate flex">
      <svg
        className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200 dark:stroke-zinc-700"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width="200"
            height="200"
            x="50%"
            y="-64"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-64" className="overflow-visible fill-zinc-50 dark:fill-zinc-900/75">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>

      <section className="relative mx-auto max-w-xl space-y-6 p-6 text-center">
        <div>
          <h2 className="title text-3xl font-bold">Let’s talk about your project</h2>
          <p className="text-muted-foreground text-left">
            I help companies and individuals build out their digital presence.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input className="mt-1" id="name" {...register('name')} />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input className="mt-1" id="email" type="email" {...register('email')} />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea className="mt-1" id="message" rows={5} {...register('message')} />
            {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? <Spinner /> : "Let's talk"}
          </Button>
        </form>
      </section>
    </section>
  )
}

export default ContactForm
