import { Media as MediaType, Page } from '@/payload-types'
import { cn } from '@/utilities/ui'
import Gallery from '@/components/Gallery'
import { Media } from '@/components/Media'
import CtaHero from '@/components/CtaHero'
import RichText from '@/components/RichText'

export const MediumImpactV2Hero: React.FC<Page['hero']> = (props) => {
  const { eyebrow, heroLogo, richText, links, carousel } = props

  const carouselData: MediaType[] =
    carousel?.[0]?.images
      ?.map((item) => item.image)
      .filter((img): img is MediaType => typeof img !== 'number') ?? []

  return (
    <section
      className="bg-gradient-soft py-20 md:pb-28 md:pt-40"
      style={{
        backgroundImage: `url('/bg_pattern.png')`,
        backgroundPosition: 'center',
      }}
    >
      <div
        className={cn(
          'grid items-start gap-10 lg:gap-14 container-px mx-auto max-w-7xl lg:grid-cols-[1fr_1.5fr]',
        )}
      >
        <div>
          <h1 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </h1>
          <div className="mt-8 max-w-xl text-4xl font-bold text-primary md:text-6xl">
            {heroLogo && typeof heroLogo === 'object' && (
              <Media
                imgClassName="object-contain w-[220px] h-[86px]"
                priority
                resource={heroLogo}
              />
            )}
          </div>

          <div>
            {richText && (
              <RichText
                className="mt-6 max-w-2xl text-lg text-muted-foreground"
                data={richText}
                enableGutter={false}
              />
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaHero links={links as any} />
          </div>
        </div>

        <div>
          <Gallery images={carouselData} thumbnail={false} alt={eyebrow || ''} />
        </div>
      </div>
    </section>
  )
}
