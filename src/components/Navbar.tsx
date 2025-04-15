'use client'

import React from 'react'
import BlurredCard from '@/components/BlurredCard'
import ThemeToggle from '@/components/theme/ThemeToggle'

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-2 z-50 mx-auto max-w-xl">
      <BlurredCard>
        <div className="flex w-full items-center justify-around">
          <ul className="flex cursor-pointer items-center justify-start space-x-4 font-semibold">
            <li onClick={() => scrollTo({ top: 1850, behavior: 'smooth' })}>
              室内写真
            </li>
            <li onClick={() => scrollTo({ top: 2780, behavior: 'smooth' })}>
              ルーム情報
            </li>
            <a href="#ハウスの周辺環境">
              <li>周辺環境</li>
            </a>
            <li onClick={() => scrollTo({ top: 4040, behavior: 'smooth' })}>
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
