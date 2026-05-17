import { Media } from '../Media'

type Treatment = {
  title: string
  image: { thumbnailURL: string }
  bullets?: string[]
}

export default function TreatmentCard({ t }: { t: Treatment }) {
  return (
    <div className="flex overflow-hidden border shadow-soft rounded-2xl transition-base hover:shadow-elevated">
      <div className="w-2/5 shrink-0 overflow-hidden bg-muted">
        <img
          src={t?.image?.thumbnailURL}
          alt={t.title}
          loading="lazy"
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-3/5 flex-col gap-2 p-4">
        <h3 className="font-serif text-lg leading-tight text-primary">{t.title}</h3>
        {t.bullets && (
          <ul className="ml-4 list-disc space-y-1 text-xs text-muted-foreground">
            {t.bullets.map((b: any, idx) => (
              <li key={idx}>{b?.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
