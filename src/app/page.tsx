import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import PersonnelSection from '@/components/PersonnelSection'

const Home = () => (
  <main>
    {/* main section */}
    <HeroSection />

    <PersonnelSection />
  </main>
)

export default Home
