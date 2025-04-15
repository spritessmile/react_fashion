import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import RoomShower from '@/components/RoomShower'
import EnvShower from '@/components/EnvShower'
import RoomList from '@/components/RoomList'
import ContactForm from '@/components/ContactForm'
import Requirements from '@/components/Requirements'
import Location from '@/components/Location'

const Home = () => (
  <main>
    {/* main section */}
    <HeroSection />

    <Requirements />

    <RoomShower />

    <RoomList />

    <EnvShower />

    <Location />

    <ContactForm />
  </main>
)

export default Home
