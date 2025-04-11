import { Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center rounded-t-3xl border border-black/[0.1] bg-gray-50 px-10 py-5 dark:border-white/[0.2] dark:bg-black">
      <h2 className="text-2xl font-semibold">お問い合わせ連絡先</h2>
      <div className="flex items-center justify-start space-y-4 text-xl font-semibold">
        <Phone size={32} />
        <h2>(0)80 2785 7165</h2>
      </div>

      <div className="flex items-center justify-start space-y-4">
        <Mail size={32} />
        <h2>machizukuri.project@gmail.com 杉本</h2>
      </div>
    </footer>
  )
}

export default Footer
