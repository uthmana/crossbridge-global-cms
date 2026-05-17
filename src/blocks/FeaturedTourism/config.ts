import { linkGroup } from '@/fields/linkGroup'
import type { Block } from 'payload'

export const FeaturedTourismBlock: Block = {
  slug: 'featuredTourism',
  interfaceName: 'FeaturedTourismBlock',
  labels: {
    singular: 'Featured Tourism',
    plural: 'Featured Tourism',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'stat',
      type: 'text',
      label: 'Satisfaction',
      required: false,
    },
    {
      name: 'bullets',
      type: 'array',
      label: 'Bullets Points',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'bullet',
          type: 'text',
          label: 'Bullet',
          required: false,
        },
      ],
    },
    linkGroup({
      overrides: {
        maxRows: 2,
        label: 'CTA Buttons',
      },
    }),
  ],
}
