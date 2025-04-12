import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'
import type { NextRequest, NextResponse } from 'next/server'

const resend = new Resend('re_G8Uia7rS_9J4d8z7p7ZMCn1H8jsNwbxeE')

interface ResponseData {
  username: string
  emailAddress: string
  contactContent: string
}

export async function POST(req: NextRequest, res: NextResponse<ResponseData>) {
  const { username, emailAddress, contactContent } = await req.json()

  const { data, error } = await resend.emails.send({
    from: '星野民家シェアハウス <onboarding@resend.dev>',
    to: ['gaomingzhao666@outlook.com'],
    subject: '問い合わせ',
    react: EmailTemplate({
      username: username,
      emailAddress: emailAddress,
      contactContent: contactContent,
    }) as React.ReactElement,
  })

  console.log({ username, emailAddress, contactContent })

  res.json({ username: username, emailAddress, contactContent })

  if (error) {
    return Response.json({ error }, { status: 500 })
  }

  return Response.json(data)
}
