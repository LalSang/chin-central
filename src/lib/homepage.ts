import type { Article } from "@/types/news";

const SECONDARY_COUNT = 3;

export function sortByNewest(articles: Article[]): Article[] {
    return [...articles].sort(
        (a,b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
    );
}

export function getHomepageSections(articles: Article[]) {
    const latest = sortByNewest(articles);

    const hero = latest.find((article) => article.isFeatured) ?? latest[0];

    const usedPublishers = new Set<string>();
    if (hero) usedPublishers.add(hero.publisher.id);

    const secondary: Article[] = [];
    for (const article of latest) {
        if (secondary.length === SECONDARY_COUNT) break;
        if (article.id === hero?.id) continue;
        if (usedPublishers.has(article.publisher.id)) continue;

        usedPublishers.add(article.publisher.id);
        secondary.push(article);
    }

    return { hero, secondary, latest };
}