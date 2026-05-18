'use client'
import React, { useEffect, useState } from 'react'
import type { Header } from '@/payload-types'
import { HeaderNav } from './Nav'
import { cn } from '@/utilities/ui'
import SideBar from './SideBar'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-base',
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border shadow-soft'
          : 'bg-transparent',
      )}
    >
      <HeaderNav data={data} open={open} setOpen={setOpen} />
      {open && <SideBar data={data} setOpen={setOpen} />}
    </header>
  )
}
