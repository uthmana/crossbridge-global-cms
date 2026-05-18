import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'services',
  interfaceName: 'ServicesBlock',
  labels: {
    singular: 'Service',
    plural: 'Services',
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
      name: 'items',
      type: 'array',
      label: 'Services Item',
      minRows: 1,
      maxRows: 4,
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
          name: 'cta',
          type: 'text',
          label: 'CTA Label',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'CTA URL',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Service Image',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Image Alt Text',
          required: true,
        },
      ],
    },
  ],
}
