import { ArrowRight } from 'lucide-react'
import type { Media as MediaType, ServicesBlock as ServicesProps } from '@/payload-types'
import { Media } from '@/components/Media'

type ServiceItemType = {
  eyebrow: string
  title: string
  description: string
  cta: string
  href: string
  image: number | MediaType
  alt: string
  id?: string | null
}

const ServiceRow = ({ service, index }: { service: ServiceItemType; index: number }) => {
  const reversed = index % 2 === 1 // 0,2 => image left | 1,3 => image right
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reversed ? 'lg:order-2' : 'lg:order-1'}>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-4xl bg-gradient-accent opacity-15 blur-2xl" />
          <div className="overflow-hidden rounded-3xl shadow-elevated">
            <Media
              imgClassName="w-full max-h-125 object-cover transition-smooth hover:scale-[1.03]"
              priority
              resource={service?.image}
            />
          </div>
        </div>
      </div>
      <div className={reversed ? 'lg:order-1' : 'lg:order-2'}>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {service.eyebrow}
        </span>
        <h3 className="mt-3 text-3xl font-bold text-primary md:text-4xl">{service.title}</h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {service.description}
        </p>
        <a
          href={service.href}
          className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
        >
          {service.cta}
          <ArrowRight className="h-4 w-4 transition-base group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

export const ServicesBlock: React.FC<ServicesProps> = (props) => {
  const { eyebrow, title, description, items } = props

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {items?.map((s, i) => (
            <ServiceRow key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
