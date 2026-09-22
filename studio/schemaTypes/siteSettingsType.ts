import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'monogram', type: 'string', description: 'Short mark shown in the navigation, e.g. OA', validation: (rule) => rule.required().max(4) }),
    defineField({ name: 'role', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'heroEyebrow', title: 'Hero eyebrow', type: 'string' }),
    defineField({ name: 'heroTitle', title: 'Hero title', type: 'text', rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: 'intro', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'availability', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'email', type: 'string', validation: (rule) => rule.required().email() }),
    defineField({ name: 'resumeUrl', title: 'Résumé URL', type: 'url' }),
    defineField({
      name: 'socialLinks', title: 'Social links', type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }), defineField({ name: 'url', type: 'url', validation: (rule) => rule.required() })] })],
    }),
    defineField({
      name: 'capabilities', title: 'Focus areas', type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [defineField({ name: 'number', type: 'string', validation: (rule) => rule.required() }), defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }), defineField({ name: 'description', type: 'text', rows: 3, validation: (rule) => rule.required() })] })],
      validation: (rule) => rule.max(4),
    }),
  ],
  preview: { prepare: () => ({ title: 'Portfolio site settings' }) },
})
