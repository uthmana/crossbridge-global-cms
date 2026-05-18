'use client'

import React, { useEffect, useState } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/utilities/ui'
import Autoplay from 'embla-carousel-autoplay'
import { Media as MediaType } from '@/payload-types'
import { Media } from '../Media'

export default function Gallery({
  images,
  thumbnail = true,
}: {
  images: MediaType[]
  alt: string
  thumbnail?: boolean
}) {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)

  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  )

  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelected(api.selectedScrollSnap())
    onSelect()
    api.on('select', onSelect)
    api.on('reInit', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <div>
      <Carousel setApi={setApi} plugins={[plugin.current]} className="relative">
        <CarouselContent>
          {images?.map((src, i) => (
            <CarouselItem key={i}>
              <div className="overflow-hidden rounded-2xl shadow-elevated">
                <Media imgClassName="aspect-4/3 w-full object-cover" priority resource={src} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3" />
        <CarouselNext className="right-3" />
        <div className="mt-4 flex justify-center gap-1.5">
          {images?.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                'h-1.5 rounded-full transition-all',
                selected === i ? 'w-6 bg-accent' : 'w-1.5 bg-muted-foreground/30',
              )}
            />
          ))}
        </div>
      </Carousel>
      {thumbnail && (
        <div className="mt-3 flex flex-wrap gap-2">
          {images?.map((src, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                'h-12 w-16 overflow-hidden rounded-md border transition-base',
                selected === i
                  ? 'border-accent ring-2 ring-accent/30'
                  : 'border-border opacity-70 hover:opacity-100',
              )}
            >
              <Media imgClassName="h-full w-full object-cover" priority resource={src} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
