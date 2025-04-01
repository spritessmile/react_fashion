'use client'

import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/theme/ThemeToggle'

const Navigation = () => {
  const dos: React.MouseEventHandler<HTMLButtonElement> = () => {
    alert('experimental functionality')
  }

  return (
    <nav>
      <Button variant="outline">Contact us</Button>

      <ThemeToggle />
      <Button variant={'outline'} onClick={dos}>
        lang
      </Button>
    </nav>
  )
}

export default Navigation
