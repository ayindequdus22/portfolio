import { defineField, defineType } from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'role', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'company', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'employmentType', title: 'Employment type', type: 'string', options: { list: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Hackathon'] }, validation: (rule) => rule.required() }),
    defineField({ name: 'startDate', type: 'date', options: { dateFormat: 'MMM YYYY' }, validation: (rule) => rule.required() }),
    defineField({ name: 'endDate', type: 'date', options: { dateFormat: 'MMM YYYY' }, hidden: ({ document }) => Boolean(document?.current) }),
    defineField({ name: 'current', type: 'boolean', initialValue: false }),
    defineField({ name: 'highlights', type: 'array', of: [{ type: 'text', rows: 2 }], validation: (rule) => rule.min(1).max(5) }),
  ],
  orderings: [{ title: 'Start date, newest', name: 'startDateDesc', by: [{ field: 'startDate', direction: 'desc' }] }],
  preview: { select: { title: 'role', subtitle: 'company' } },
})
