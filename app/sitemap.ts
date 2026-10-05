import { BASE_URL, PAGES_ORDERED } from '@/constants/pages.constants';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    return PAGES_ORDERED.map((page) => ({
        url: new URL(page.route, BASE_URL).href,
        lastModified: new Date(),
    }));
}
