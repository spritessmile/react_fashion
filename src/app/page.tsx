import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import RoomShower from '@/components/RoomShower'
import ImagesCarousel from '@/components/ImagesCarousel'
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

    <ImagesCarousel />

    <Location />

    <ContactForm />
  </main>
)

export default Home
