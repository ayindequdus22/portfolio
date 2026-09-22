import { useQuery } from '@tanstack/react-query'
import { fallbackContent } from '../content/fallback'
import type { PortfolioContent } from '../content/types'
import { portfolioQuery } from '../lib/queries'
import { sanityFetch } from '../lib/sanity'

export function usePortfolioContent() {
  return useQuery({
    queryKey: ['portfolio-content'],
    queryFn: async (): Promise<PortfolioContent> => {
      const content = await sanityFetch<Partial<PortfolioContent>>(portfolioQuery)

      return {
        site: { ...fallbackContent.site, ...content?.site },
        projects: content?.projects?.length ? content.projects : fallbackContent.projects,
        experiences: content?.experiences?.length ? content.experiences : fallbackContent.experiences,
      }
    },
    initialData: fallbackContent,
    initialDataUpdatedAt: 0,
    staleTime: 1000 * 60 * 10,
  })
}
