import type { ProcessBlock as ProcessProps } from '@/payload-types'

export const ProcessBlock: React.FC<ProcessProps> = (props) => {
  const { eyebrow, title, description, steps } = props

  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps?.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <div className="relative text-2xl font-bold mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground shadow-glow">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
