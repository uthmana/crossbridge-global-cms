import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/xbutton'
import type { FeaturedTourismBlock as FeaturedTourismProps } from '@/payload-types'
import { Media } from '@/components/Media'

export const FeaturedTourismBlock: React.FC<FeaturedTourismProps> = (props) => {
  const { eyebrow, title, description, media, stat, bullets, links } = props

  return (
    <section id="tourism" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 -z-10 rounded-4xl bg-gradient-accent opacity-20 blur-2xl" />
          <div className="overflow-hidden rounded-3xl shadow-elevated">
            <Media imgClassName="h-full w-full object-cover" priority resource={media} />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-card md:block">
            <div className="text-3xl font-extrabold text-primary">{stat}</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Patient satisfaction
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">{description}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets?.map((b) => (
              <li key={b.id} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                  <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground/80">{b.bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            {links?.map(({ link }, i) => {
              if (link?.appearance === 'default') {
                return (
                  <Button variant="hero" size="xl" asChild key={i}>
                    <a href={link?.url || ''}>
                      {link?.label} <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                )
              }
              return (
                <Button variant="outline" size="xl" asChild key={i}>
                  <a href={link?.url || ''}> {link?.label}</a>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
