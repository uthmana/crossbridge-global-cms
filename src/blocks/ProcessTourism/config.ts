import type { Block } from 'payload'

export const ProcessTourismBlock: Block = {
  slug: 'processtourism',
  interfaceName: 'ProcessTourismBlock',
  labels: {
    singular: 'Process Tourism',
    plural: 'Process Tourism',
  },
  fields: [
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
      name: 'steps',
      type: 'array',
      label: 'Process Steps',
      minRows: 1,
      maxRows: 10,
      fields: [
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
      ],
    },
  ],
}
