'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/xbutton'

export const HeaderNav: React.FC<{
  data: HeaderType
  setOpen: any
  open: boolean
}> = ({ data, setOpen, open }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
      <Logo href="/" />
      <div className="hidden items-center gap-8 lg:flex">
        {navItems.map((l: any) =>
          l.children.length !== 0 ? (
            <div key={l.link?.label} className="group relative">
              <a
                href={l.link?.url}
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                <span className="story-link">{l.link?.label}</span>
                <ChevronDown className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:rotate-180" />
              </a>
              <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-xl border border-border bg-background/95 shadow-soft backdrop-blur-xl">
                  {l.children.map((s: any) => (
                    <a
                      key={s.link?.label}
                      href={s.link?.url}
                      className="block px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {s.link?.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <a
              key={l.link?.label}
              href={l.link?.url}
              className="story-link text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              {l.link?.label}
            </a>
          ),
        )}
      </div>
      <div className="hidden items-center gap-3 lg:flex">
        <Button variant="hero" size="sm" asChild>
          <a href="/contact">Free Consultation</a>
        </Button>
      </div>
      <button
        aria-label="Toggle menu"
        className="lg:hidden rounded-lg p-2 text-foreground hover:bg-muted"
        onClick={() => setOpen((v: boolean) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
    </nav>
  )
}
