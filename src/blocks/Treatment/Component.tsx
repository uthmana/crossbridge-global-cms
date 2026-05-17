import TreatmentCard from '@/components/TreatmentCard'
import type { TreatmentBlock as TreatmentProps } from '@/payload-types'

export const TreatmentBlock: React.FC<TreatmentProps> = (props) => {
  const { title, items } = props

  return (
    <section className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl text-primary md:text-4xl">{title}</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items?.map((t: any, i) => (
            <TreatmentCard key={t?.title + i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
