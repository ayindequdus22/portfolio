import { createClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2026-03-01',
      useCdn: true,
      perspective: 'published',
    })
  : null

export async function sanityFetch<T>(query: string): Promise<T | null> {
  if (!client) return null

  try {
    return await client.fetch<T>(query)
  } catch (error) {
    console.warn('Sanity content could not be loaded. Falling back to local portfolio content.', error)
    return null
  }
}
