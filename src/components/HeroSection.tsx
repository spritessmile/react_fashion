'use client'
import React from 'react'
import { HeroParallax } from '@/components/ui/hero-parallax'
import timg from '@/assets/1.jpg'

const HeroSection = () => {
  return <HeroParallax products={products} />
}

export default HeroSection

const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: timg,
  },
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: timg,
  },
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: timg,
  },
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: timg,
  },
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: timg,
  },
]
