'use client'

import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu'
import Card from '@/components/Card'
import ThemeToggle from '@/components/theme/ThemeToggle'
import { cn } from '@/lib/utils'

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null)

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-10 z-50 mx-auto flex max-w-2xl items-center justify-around',
        className,
      )}
    >
      <Card>
        <h1 className="mr-5 text-xl font-semibold">Share Terrace</h1>

        <Menu setActive={setActive}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Pricing"
          ></MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact us">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>

          <ThemeToggle />
          {/* <Button variant={'outline'} onClick={}>
          lang
        </Button> */}
        </Menu>
      </Card>
    </nav>
  )
}

export default Navbar
