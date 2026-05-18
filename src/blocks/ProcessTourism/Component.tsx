import type { ProcessTourismBlock as ProcessTourismProps } from '@/payload-types'

export const ProcessTourismBlock: React.FC<ProcessTourismProps> = (props) => {
  const { title, description, steps } = props

  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container-px mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 font-serif text-3xl text-primary md:text-4xl">{title}</h2>

          <p className="mt-5  text-sm leading-relaxed  md:text-base text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-3xl">
          <ol className="space-y-6">
            {steps?.map((step, index) => (
              <li
                key={step.title}
                className="relative flex gap-5 rounded-3xl border border-border bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl"
              >
                {/* Vertical Connector */}
                {index !== steps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute left-11.75 top-16 h-[calc(100%+1.5rem)] w-0.5 bg-linear-to-b from-accent/40 to-accent/10"
                  />
                )}

                {/* Step Number */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground shadow-md">
                  {index + 1}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-primary">{step.title}</h3>

                  <p className="mt-2 text-xs leading-relaxed  md:text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
