'use client'

import Image, { StaticImageData } from 'next/image'
import React, {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { LucideProps } from 'lucide-react'

interface ThreeDCardProps {
  icon: ReactNode
  title: string
  desc: string
}

const ThreeDCard = (card: ThreeDCardProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative flex h-64 min-w-sm flex-col items-center justify-center space-y-4 rounded-xl border border-black/[0.1] bg-gray-50 px-10 sm:w-80 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="100">{card.icon}</CardItem>

        <CardItem translateZ="50">
          <h2 className="text-center text-xl font-semibold">{card.title}</h2>
        </CardItem>

        <CardItem translateZ="50" className="text-neutral-600">
          {card.desc}
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default ThreeDCard
