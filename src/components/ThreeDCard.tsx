'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

interface ThreeDCardProps {
  img: StaticImageData
  desc: string
}

const ThreeDCard = (card: ThreeDCardProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={card.img}
            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-semibold text-neutral-600 dark:text-white"
        >
          {card.desc}
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default ThreeDCard
