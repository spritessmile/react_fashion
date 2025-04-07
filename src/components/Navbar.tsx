'use client'

import React from 'react'
import BlurredCard from '@/components/BlurredCard'
import ThemeToggle from '@/components/theme/ThemeToggle'
import { cn } from '@/lib/utils'

const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-10 z-50 mx-auto w-full max-w-2xl',
        className,
      )}
    >
      <BlurredCard>
        <h1 className="mr-48 text-xl font-semibold">Share Terrace</h1>
        <ul className="mr-2 flex items-center justify-around space-x-2">
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>

        <ThemeToggle />
        <ThemeToggle />
        {/* <Button variant={'outline'} onClick={}>
          lang
        </Button> */}
      </BlurredCard>
    </nav>
  )
}

export default Navbar
