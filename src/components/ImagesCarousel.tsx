'use client'

import Carousel from '@/components/ui/carousel'
import outsideImg1 from '@/assets/images/outsideOfHouse/img-1.jpg'
import outsideImg2 from '@/assets/images/outsideOfHouse/img-2.jpg'
import outsideImg3 from '@/assets/images/outsideOfHouse/img-3.jpg'
import outsideImg4 from '@/assets/images/outsideOfHouse/img-4.jpg'
import outsideImg5 from '@/assets/images/outsideOfHouse/img-5.jpg'
import outsideImg6 from '@/assets/images/outsideOfHouse/img-6.jpg'
import outsideImg7 from '@/assets/images/outsideOfHouse/img-7.jpg'
import outsideImg8 from '@/assets/images/outsideOfHouse/img-8.jpg'

const ImagesCarousel = () => {
  const slideData = [
    {
      src: outsideImg1,
    },
    {
      src: outsideImg2,
    },
    {
      src: outsideImg3,
    },
    {
      src: outsideImg4,
    },
    {
      src: outsideImg5,
    },
    {
      src: outsideImg6,
    },
    {
      src: outsideImg7,
    },
    {
      src: outsideImg8,
    },
  ]
  return (
    <div className="relative h-full w-full overflow-hidden py-20">
      <h1 className="mb-8 text-center text-3xl font-semibold">
        ハウスの周辺環境
      </h1>
      <Carousel slides={slideData} />
    </div>
  )
}

export default ImagesCarousel
