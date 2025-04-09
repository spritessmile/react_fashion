'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

const ThemeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        className="hidden dark:flex dark:justify-center"
        onClick={() => setTheme('light')}
      >
        <Sun className="size-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="dark:hidden"
        onClick={() => setTheme('dark')}
      >
        <Moon className="size-5" />
      </Button>

      <span className="sr-only">Toggle theme</span>
    </div>
  )
}

export default ThemeToggle
