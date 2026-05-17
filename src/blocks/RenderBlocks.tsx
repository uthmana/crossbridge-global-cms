import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ContentLegalBlock } from '@/blocks/ContentLegal/Component'
import { ServicesBlock } from '@/blocks/ServicesBlock/Component'
import { FeaturedTourismBlock } from '@/blocks/FeaturedTourism/Component'
import { TestimonialBlock } from '@/blocks/Testimonial/Component'
import { ProcessBlock } from './Process/Component'
import { StoryBlock } from './Story/Component'
import { TradeCategoryBlock } from './TradeCategory/Component'
import { LargeCardBlock } from './LargeCard/Component'
import { ProcessTourismBlock } from './ProcessTourism/Component'
import { TreatmentBlock } from './Treatment/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  contentLegal: ContentLegalBlock,
  services: ServicesBlock,
  featuredTourism: FeaturedTourismBlock,
  testimonial: TestimonialBlock,
  process: ProcessBlock,
  story: StoryBlock,
  tradecategory: TradeCategoryBlock,
  largecard: LargeCardBlock,
  processtourism: ProcessTourismBlock,
  treatment: TreatmentBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="w-full" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
