import RichText from '@/components/RichText'
import type { StoryBlock as StoryProps } from '@/payload-types'

export const StoryBlock: React.FC<StoryProps> = (props) => {
  const { eyebrow, title, richText, stats } = props

  return (
    <section className="py-20 md:py-28">
      <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>

          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">{title}</h2>

          <div>
            {richText && (
              <RichText
                className="mt-5 text-lg text-muted-foreground"
                data={richText}
                enableGutter={false}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats?.map((s) => (
            <div key={s.id} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="text-3xl font-bold text-primary md:text-4xl">{s.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
