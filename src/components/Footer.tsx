import ContactInfo from '@/components/ContactInfo'

const Footer = () => {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center rounded-t-3xl border border-black/[0.1] bg-gray-50 px-10 py-5 dark:border-white/[0.2] dark:bg-black">
      <ContactInfo />
    </footer>
  )
}

export default Footer
