import CtaHero from '@/components/CtaHero'
import RichText from '@/components/RichText'
import { Page } from '@/payload-types'

export const LowImpactV2Hero: React.FC<Page['hero']> = (props) => {
  const { eyebrow, title, richText, links } = props

  return (
    <section className="bg-gradient-soft py-16 md:py-28 w-full">
      <div className="container-px mx-auto max-w-7xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold text-primary md:text-6xl">{title}</h1>

        {richText && (
          <RichText
            className="mt-6 mx-0 max-w-4xl text-lg text-muted-foreground"
            data={richText}
            enableGutter={false}
          />
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <CtaHero links={links as any} />
        </div>
      </div>
    </section>
  )
}
