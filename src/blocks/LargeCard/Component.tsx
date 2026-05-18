import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { LargeCardBlock as LargeCardProps } from '@/payload-types'

export const LargeCardBlock: React.FC<LargeCardProps> = (props) => {
  const { richText, media } = props

  return (
    <section className="py-16 md:py-24 bg-gradient-soft">
      <div className="container-px mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-elevated">
          {media && <Media imgClassName="h-full w-full object-cover" priority resource={media} />}
        </div>

        <div>
          {richText && (
            <RichText
              className="mt-6 max-w-2xl text-lg text-muted-foreground richtext-largecard"
              data={richText}
              enableGutter={false}
            />
          )}
        </div>
      </div>
    </section>
  )
}
