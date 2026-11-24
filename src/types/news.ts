export type LanguageCode = "en" | "cnh" | "cfm" | "ctd" | "lus";

export type Category = "politics" | "culture" | "education" | "community";

export type Publisher = {
    id: string;
    slug: string;
    name: string;
    websiteUrl: string;
    logoUrl?: string;
    description?: string;
};

export type Article = {
    id: string;
    slug: string;
    title: string;
    summary: string;
    publisher: Publisher;
    originalLanguage: LanguageCode;
    availableTranslations: LanguageCode[];
    category: Category;
    publishedAt: string;
    author?: string;
    imageUrl?: string;
    isFeatured: boolean;
};