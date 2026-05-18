import { Quote, Star } from 'lucide-react'
import type { TestimonialBlock as TestimonialProps } from '@/payload-types'

export const TestimonialBlock: React.FC<TestimonialProps> = (props) => {
  const { eyebrow, title, testimonials } = props

  return (
    <section className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">{title}</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials?.map((t) => (
            <figure
              key={t.fullname}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-soft hover-lift"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/20" />
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground/85">
                "{t.message}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-accent text-sm font-bold text-accent-foreground">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-bold text-primary">{t.fullname}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.country}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
