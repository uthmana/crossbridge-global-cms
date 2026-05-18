import React from 'react'
import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/xbutton'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-cta p-5 shadow-elevated md:p-16">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full z-0"
            style={{
              backgroundImage: `url('/bg_pattern.png')`,
              backgroundPosition: 'center',
            }}
          ></div>
          <div>
            <span className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              Ready to get started?
            </span>
          </div>
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="richtext-cta-banner">
              {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              {(links || []).map(({ link }, i) => {
                return (
                  <Button key={i} variant="hero" size="xl" className="md:py-7" asChild>
                    <CMSLink key={i} size="lg" {...link} />
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
