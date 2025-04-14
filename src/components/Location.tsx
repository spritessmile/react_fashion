import Image from 'next/image'
import locationImg from '@/assets/images/location.png'

const Location = () => (
  <div className="mt-15 mb-20 flex flex-col items-center justify-center">
    <h2 className="mb-3 text-center text-3xl font-semibold">マップで見る</h2>

    <Image
      src={locationImg}
      className="m-5 w-fit rounded-xl"
      alt="星野民家シェアハウス位置"
    />

    <p className="text-sm text-gray-400">福岡県北九州市門司区柳町4</p>
  </div>
)

export default Location
