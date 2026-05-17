import React from 'react'
import type { ContentLegalBlock as ContentLegalProps } from '@/payload-types'
import RichText from '@/components/RichText'

export const ContentLegalBlock: React.FC<ContentLegalProps> = ({
  title,
  subTitle,
  updatedAt,
  richText,
}) => {
  return (
    <section className="w-full py-12">
      <div className="container-px mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">{subTitle}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-muted-foreground">
            Last updated:{' '}
            {new Date(updatedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <article className="space-y-8">
          {richText && (
            <RichText
              className="mb-0 richText-content-legal"
              data={richText}
              enableGutter={false}
            />
          )}
        </article>
      </div>
    </section>
  )
}
