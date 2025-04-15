import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'
import type { NextRequest, NextResponse } from 'next/server'

// test api key
const resend = new Resend(process.env.RESEND_API_KEY)

interface ResponseData {
  username: string
  emailAddress: string
  contactContent: string
}

export async function POST(req: NextRequest, res: NextResponse<ResponseData>) {
  const { username, emailAddress, contactContent } = await req.json()

  const { data, error } = await resend.emails.send({
    from: '星野民家シェアハウス <onboarding@resend.dev>',
    to: ['machizukuri.project@gmail.com'],
    subject: '問い合わせメール',
    react: EmailTemplate({
      username: username,
      emailAddress: emailAddress,
      contactContent: contactContent,
    }) as React.ReactElement,
  })

  if (!error) Response.json({ data }, { status: 200 })
  else return Response.json({ error }, { status: 500 })

  return Response.json(data)
}
