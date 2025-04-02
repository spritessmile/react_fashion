import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'
import type { NextApiRequest, NextApiResponse } from 'next'

const resend = new Resend('re_G8Uia7rS_9J4d8z7p7ZMCn1H8jsNwbxeE')

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['gaomingzhao666@outlook.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: '' }) as React.ReactElement,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
