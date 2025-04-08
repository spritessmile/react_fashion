import * as React from 'react'

interface EmailTemplateProps {
  username: string
  emailAddress: string
  contactContent: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  emailAddress,
  contactContent,
}) => (
  <main>
    <h3>応募者名前</h3>
    <p>{username}</p>

    <h3>希望返信するメールアドレス</h3>
    <p>{emailAddress}</p>

    <h3>問い合わせ内容</h3>
    <p>{contactContent}</p>
  </main>
)
