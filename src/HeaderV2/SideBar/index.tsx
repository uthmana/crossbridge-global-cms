'use client'
import { Button } from '@/components/ui/xbutton'
import type { Header as HeaderType } from '@/payload-types'

interface SideBarProps {
  data: HeaderType
  setOpen: (v: boolean) => void
}

export default function SideBar({ data, setOpen }: SideBarProps) {
  const navItems = data?.navItems || []

  return (
    <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
      <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
        {navItems.map((l: any) => (
          <div key={l.id}>
            <a
              href={l.link?.url}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
            >
              {l.link?.label}
            </a>

            {l.children?.length > 0 && (
              <div className="ml-3 flex flex-col border-l border-border pl-3">
                {l.children.map((s: any) => (
                  <a
                    key={s.id}
                    href={s.link?.url}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
                  >
                    {s.link?.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        <Button variant="hero" className="mt-2" asChild>
          <a href="/contact" onClick={() => setOpen(false)}>
            Get Free Consultation
          </a>
        </Button>
      </div>
    </div>
  )
}
