import CtaHero from '@/components/CtaHero'
import { Media } from '@/components/Media'
import { Media as MediaType, Page } from '@/payload-types'

export const HighImpactV2Hero: React.FC<Page['hero']> = (props) => {
  const { badge, heading, description, links, media, stats } = props

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 md:pt-44 pb-24 md:pb-36"
      style={{
        backgroundImage: `url('/bg_pattern.png')`,
        backgroundPosition: 'center',
      }}
    >
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* <div className="absolute -top-40 -left-40 h-128 w-lg rounded-full bg-accent/10 blur-3xl" /> */}
        <div className="absolute top-1/3 -right-40 h-136 w-136 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container-px mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse-soft" />
            {badge?.text}
          </span>

          <h1 className="mt-8 text-3xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {heading?.title} <span className="text-accent">{heading?.highlight}</span>{' '}
            {heading?.suffix}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CtaHero links={links as any} />
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
            {stats?.map((stat: any) => (
              <div key={stat.label}>
                <dt className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-scale-in">
          <div
            className="relative overflow-hidden rounded-tl-[3rem] bg-gradient-accent shadow-glow hover:shadow-elevated rounded-br-[3rem] shadow-elevated animate-float"
            style={{ animationDelay: '0.4s' }}
          >
            <Media imgClassName="h-full w-full object-cover" priority resource={media} />
          </div>
        </div>
      </div>
    </section>
  )
}
