import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'summary', type: 'text', rows: 3, validation: (rule) => rule.required().max(230) }),
    defineField({ name: 'description', type: 'text', rows: 8, validation: (rule) => rule.required() }),
    defineField({ name: 'image', title: 'Project image', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({ name: 'category', type: 'string', options: { list: [{ title: 'Web', value: 'web' }, { title: 'Mobile', value: 'mobile' }, { title: 'Product concept', value: 'product concept' }] }, validation: (rule) => rule.required() }),
    defineField({ name: 'technologies', type: 'array', of: [{ type: 'string' }], validation: (rule) => rule.min(1) }),
    defineField({ name: 'liveUrl', title: 'Live project URL', type: 'url' }),
    defineField({ name: 'repositoryUrl', title: 'Source repository URL', type: 'url' }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'orderRank', title: 'Display order', type: 'number', description: 'Lower numbers appear first.' }),
  ],
  preview: { select: { title: 'title', media: 'image', subtitle: 'category' } },
})
