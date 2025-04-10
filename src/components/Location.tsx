import Image from 'next/image'
import locationImg from '@/assets/images/location.png'

const Location = () => (
  <div className="flex items-center justify-center">
    <Image
      src={locationImg}
      className="m-5 w-fit rounded-xl"
      alt="シェアハウス位置"
    />
  </div>
)

export default Location
