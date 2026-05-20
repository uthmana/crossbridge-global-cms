import Gallery from '@/components/Gallery'
import RichText from '@/components/RichText'
import type { TradeCategoryBlock as TradeCategoryProps } from '@/payload-types'
import { cn } from '@/utilities/ui'

export const TradeCategoryBlock: React.FC<TradeCategoryProps> = ({ carousel }) => {
  const getImage = (images: any) => {
    if (!images) return null
    return images.map((item: any) => ({ ...item.image }))
  }

  return (
    <section>
      {carousel?.map((item, i) => (
        <div className="py-16 md:py-24" id={item?.hashLink} key={item.id}>
          <div className="container-px mx-auto max-w-7xl">
            <h2 className="mb-10 font-serif text-3xl text-primary md:text-4xl">{item?.title}</h2>

            <div
              className={cn(
                'grid items-start gap-10 lg:gap-14',
                item.reversed ? 'lg:grid-cols-[1fr_1.3fr]' : 'lg:grid-cols-[1.3fr_1fr]',
              )}
            >
              {/* Gallery */}
              <div className={item.reversed ? 'lg:order-2' : 'lg:order-1'}>
                <Gallery images={getImage(item?.images)} alt={item?.title} />
              </div>

              {/* Content */}
              <div
                className={cn(
                  'space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg',
                  item.reversed ? 'lg:order-1' : 'lg:order-2',
                )}
              >
                {item?.description && (
                  <RichText
                    className="mb-0  text-lg text-muted-foreground"
                    data={item?.description}
                    enableGutter={false}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
