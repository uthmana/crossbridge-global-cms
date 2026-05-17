import type { Block } from 'payload'

import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
  HeadingFeature,
} from '@payloadcms/richtext-lexical'

export const ContentLegal: Block = {
  slug: 'contentLegal',
  interfaceName: 'ContentLegalBlock',

  labels: {
    singular: 'Content Legal',
    plural: 'Content Legal',
  },
  fields: [
    {
      name: 'subTitle',
      type: 'text',
      required: true,
      defaultValue: 'Legal',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'updatedAt',
      type: 'date',
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3', 'h4'],
          }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
  ],
}
