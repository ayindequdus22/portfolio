import { createClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

export const isSanityConfigured = Boolean(projectId)

const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2026-03-01',
      useCdn: true,
      perspective: 'published',
    })
  : null

export async function sanityFetch<T>(query: string, params: Record<string, string> = {}): Promise<T | null> {
  if (!client) return null

  try {
    return await client.fetch<T>(query, params)
  } catch (error) {
    console.warn('Sanity content could not be loaded. Falling back to local portfolio content.', error)
    return null
  }
}
