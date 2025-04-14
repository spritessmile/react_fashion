'use client'

import React from 'react'
import BlurredCard from '@/components/BlurredCard'
import ThemeToggle from '@/components/theme/ThemeToggle'
import { cn } from '@/lib/utils'

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-3 z-50 mx-auto max-w-xl">
      <BlurredCard>
        <div className="flex w-full items-center justify-around">
          <ul className="flex items-center justify-start space-x-4 font-semibold">
            <li onClick={() => scrollTo({ top: 1800, behavior: 'smooth' })}>
              室内写真
            </li>
            <li onClick={() => scrollTo({ top: 2700, behavior: 'smooth' })}>
              ルーム情報
            </li>
            <li onClick={() => scrollTo({ top: 3200, behavior: 'smooth' })}>
              周辺環境
            </li>
            <li onClick={() => scrollTo({ top: 3900, behavior: 'smooth' })}>
              マップで見る
            </li>
          </ul>

          <ThemeToggle />
          {/* <Button variant={'outline'} onClick={}>
          lang
        </Button> */}
        </div>
      </BlurredCard>
    </nav>
  )
}

export default Navbar
