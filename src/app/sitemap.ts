import { MetadataRoute } from 'next'
import { projects } from '@/app/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://whoiswasim.vercel.app'
    const currentDate = new Date()

    // Static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]

    // Dynamic project routes
    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    return [...staticRoutes, ...projectRoutes]
}
