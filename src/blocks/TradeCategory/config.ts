import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const TradeCategoryBlock: Block = {
  slug: 'tradecategory',
  interfaceName: 'TradeCategoryBlock',
  labels: {
    singular: 'Trade Category',
    plural: 'Trade Categories',
  },
  fields: [
    {
      name: 'carousel',
      type: 'array',
      label: 'Carousel',
      minRows: 1,
      maxRows: 20,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({
                  enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'],
                }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
          label: false,
        },
        {
          name: 'hashLink',
          type: 'text',
          label: 'HashLink',
          required: true,
        },
        {
          name: 'reversed',
          type: 'checkbox',
          label: 'Reverse Content',
        },
        {
          name: 'images',
          type: 'array',
          label: 'Images',
          minRows: 1,
          maxRows: 20,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
            },
          ],
        },
      ],
    },
  ],
}
