import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'
import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'navItems',
      label: 'Navigation Items',
      type: 'array',

      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/HeaderV2/RowLabel#RowLabel',
        },
      },

      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },

        link({
          appearances: false,
        }),

        {
          name: 'children',
          label: 'Dropdown Links',
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
    afterChange: [revalidateHeader],
  },
}
