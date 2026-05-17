import type { Field } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import {
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  label: false,
  fields: [
    /**
     * HERO TYPE (existing logic preserved)
     */
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      required: true,
      options: [
        { label: 'None', value: 'none' },
        { label: 'High Impact', value: 'highImpact' },
        { label: 'Medium Impact', value: 'mediumImpact' },
        { label: 'Low Impact', value: 'lowImpact' },
        { label: 'High Impact V2', value: 'highImpactv2' },
        { label: 'Medium Impact V2', value: 'mediumImpactv2' },
        { label: 'Low Impact V2', value: 'lowImpactv2' },
      ],
    },

    /**
     * BADGE (NEW)
     */
    {
      name: 'badge',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
          defaultValue: 'Global export partner since 2014',
        },
      ],
      admin: {
        condition: (_, { type } = {}) => ['highImpactv2'].includes(type),
      },
    },

    /**
     * STRUCTURED HEADING (NEW - replaces hardcoded H1 composition)
     */
    {
      name: 'heading',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'highlight',
          type: 'text',
        },
        {
          name: 'suffix',
          type: 'text',
        },
      ],
      admin: {
        condition: (_, { type } = {}) => ['highImpactv2'].includes(type),
      },
    },
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['lowImpactv2', 'mediumImpactv2'].includes(type),
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['mediumImpactv2', 'lowImpactv2'].includes(type),
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['highImpactv2'].includes(type),
      },
    },
    /**
     * EXISTING RICH TEXT (kept as fallback / body content)
     */
    {
      name: 'richText',
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
      admin: {
        condition: (_, { type } = {}) => !['highImpactv2'].includes(type),
      },
    },

    /**
     * CTA LINKS (UNCHANGED)
     */
    linkGroup({
      overrides: {
        maxRows: 2,
        label: 'CTA Buttons',
      },
    }),

    /**
     * STATS (NEW - replaces hardcoded dl section)
     */
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 0,
      maxRows: 6,
      fields: [
        {
          name: 'value',
          type: 'text',
        },
        {
          name: 'label',
          type: 'text',
        },
      ],
      admin: {
        condition: (_, { type } = {}) => ['highImpactv2'].includes(type),
      },
    },

    /**
     * HERO IMAGE (existing, but condition expanded slightly if needed)
     */
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) => !['lowImpactv2', 'mediumImpactv2'].includes(type),
      },
    },
    {
      name: 'heroLogo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['mediumImpactv2'].includes(type),
      },
    },
    {
      name: 'carousel',
      type: 'array',
      label: 'Carousel',
      minRows: 1,
      maxRows: 6,
      admin: {
        condition: (_, { type } = {}) => ['mediumImpactv2'].includes(type),
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Slide Title',
        },

        {
          name: 'images',
          type: 'array',
          label: 'Images',
          minRows: 1,
          maxRows: 10,
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
