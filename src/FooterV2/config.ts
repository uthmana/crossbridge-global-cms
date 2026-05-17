import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Company Description',
      required: true,
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Footer Columns',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'quickLinks',
          label: 'Quick Links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },

            link({
              appearances: false,
            }),
          ],
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Get in Touch',
        },
        {
          name: 'email',
          type: 'email',
        },
        {
          name: 'phone',
          type: 'text',
        },
        {
          name: 'location',
          type: 'text',
        },
        {
          name: 'workingHours',
          type: 'text',
        },
      ],
    },
    {
      name: 'bottomBar',
      type: 'group',
      fields: [
        {
          name: 'copyrightText',
          type: 'text',
          required: true,
          defaultValue: 'CrossBridge International. All rights reserved.',
        },
        {
          name: 'legalLinks',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            link({
              appearances: false,
            }),
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
