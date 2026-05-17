import type { Block } from 'payload'

export const TreatmentBlock: Block = {
  slug: 'treatment',
  interfaceName: 'TreatmentBlock',

  labels: {
    singular: 'Treatment Block',
    plural: 'Treatment Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Treatments',
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
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },

        {
          name: 'bullets',
          type: 'array',
          label: 'Bullet Points',
          minRows: 1,
          maxRows: 20,

          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Bullet',
              required: true,
            },
          ],
        },
      ],

      defaultValue: [
        {
          title: 'Organ Transplant Surgeries',
          bullets: [
            { text: 'Kidney Transplant' },
            { text: 'Liver Transplant' },
            { text: 'Bone Marrow Transplant' },
          ],
        },
      ],
    },
  ],
}
