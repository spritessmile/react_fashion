'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'

const FormSchema = z.object({
  username: z.string().min(1, {
    message: 'Username must be at least 1 characters.',
  }),
  emailAddress: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  contactContent: z.string().min(10, {
    message: 'Username must be at least 10 characters.',
  }),
})

const onSubmit = async (values: z.infer<typeof FormSchema>) => {
  const res = await fetch('/api/resend/sendEmail', {
    method: 'POST', // Specify the request method
    headers: {
      'Content-Type': 'application/json', // Indicate the type of request
    },
    body: JSON.stringify(values),
  })
}

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-fit space-y-6 md:w-xl"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お名前</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                連絡時の名前を教えて頂いております
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                担当者はこのメールアドレスでご連絡させていただきます
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactContent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お問い合わせ</FormLabel>
              <FormControl>
                <Textarea className="h-28" {...field} />
              </FormControl>
              <FormDescription>
                連絡、または契約について気になることを気軽にお問い合わせください。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">応募する</Button>
      </form>
    </Form>
  )
}

export default ContactForm
