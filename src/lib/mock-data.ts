import type { Article, Publisher } from "@/types/news";

// FICTIONAL sample data for building the UI. These publishers and stories
// are made up on purpose so no real news organization is credited with
// articles it never wrote. Replaced by Supabase queries in Phase 2.

const highlandHerald: Publisher = {
  id: "pub-1",
  slug: "highland-herald",
  name: "Highland Herald",
  websiteUrl: "https://example.com/highland-herald",
  description: "Sample Hakha Chin news outlet.",
};

const valleyVoice: Publisher = {
  id: "pub-2",
  slug: "valley-voice",
  name: "Valley Voice",
  websiteUrl: "https://example.com/valley-voice",
  description: "Sample Falam Chin news outlet.",
};

const mountainPost: Publisher = {
  id: "pub-3",
  slug: "mountain-post",
  name: "Mountain Post",
  websiteUrl: "https://example.com/mountain-post",
  description: "Sample Tedim Chin news outlet.",
};

const diasporaDaily: Publisher = {
  id: "pub-4",
  slug: "diaspora-daily",
  name: "Diaspora Daily",
  websiteUrl: "https://example.com/diaspora-daily",
  description: "Sample English-language outlet for Chin communities abroad.",
};

export const publishers: Publisher[] = [
  highlandHerald,
  valleyVoice,
  mountainPost,
  diasporaDaily,
];

export const articles: Article[] = [
  {
    id: "art-1",
    slug: "hakha-volunteers-rebuild-footbridge",
    title: "Volunteers in Hakha finish rebuilding village footbridge",
    summary:
      "More than forty residents spent three weekends replacing the bridge that connects two neighborhoods, cutting a long detour for students and farmers.",
    publisher: highlandHerald,
    originalLanguage: "cnh",
    availableTranslations: ["en"],
    category: "community",
    publishedAt: "2026-11-23T09:15:00Z",
    author: "Sample Reporter",
    isFeatured: true,
  },
  {
    id: "art-2",
    slug: "falam-schools-weekend-reading-classes",
    title: "Falam schools add weekend Chin-language reading classes",
    summary:
      "Teachers say the free Saturday classes aim to help younger students read and write confidently in Falam Chin.",
    publisher: valleyVoice,
    originalLanguage: "cfm",
    availableTranslations: ["en"],
    category: "education",
    publishedAt: "2026-11-22T14:00:00Z",
    isFeatured: false,
  },
  {
    id: "art-3",
    slug: "tedim-youth-choir-records-album",
    title: "Tedim youth choir records an album of traditional songs",
    summary:
      "The choir worked with elders to learn songs that are rarely performed today, and plans to share the recordings online.",
    publisher: mountainPost,
    originalLanguage: "ctd",
    availableTranslations: ["en"],
    category: "culture",
    publishedAt: "2026-11-22T08:30:00Z",
    author: "Sample Reporter",
    isFeatured: false,
  },
  {
    id: "art-4",
    slug: "community-center-homework-help",
    title: "Chin community center opens after-school homework help",
    summary:
      "Volunteer tutors will meet students twice a week, with help available in English and several Chin languages.",
    publisher: diasporaDaily,
    originalLanguage: "en",
    availableTranslations: [],
    category: "community",
    publishedAt: "2026-11-21T19:45:00Z",
    isFeatured: false,
  },
  {
    id: "art-5",
    slug: "township-committee-road-repair-comments",
    title: "Township committee invites comments on road repair priorities",
    summary:
      "Residents can suggest which roads should be repaired first before the committee finalizes its plan next month.",
    publisher: highlandHerald,
    originalLanguage: "cnh",
    availableTranslations: ["en"],
    category: "politics",
    publishedAt: "2026-11-21T11:00:00Z",
    isFeatured: false,
  },
  {
    id: "art-6",
    slug: "falam-farmers-winter-storage",
    title: "Farmers share tips for storing the harvest through winter",
    summary:
      "Families describe the methods they use to keep grain and vegetables dry and safe during the cold months.",
    publisher: valleyVoice,
    originalLanguage: "cfm",
    availableTranslations: [],
    category: "community",
    publishedAt: "2026-11-20T16:20:00Z",
    isFeatured: false,
  },
  {
    id: "art-7",
    slug: "chin-national-day-planning",
    title: "Planning begins for next year's Chin National Day celebration",
    summary:
      "Organizers are looking for volunteers, performers and food vendors for the February event.",
    publisher: diasporaDaily,
    originalLanguage: "en",
    availableTranslations: [],
    category: "culture",
    publishedAt: "2026-11-20T10:00:00Z",
    isFeatured: false,
  },
  {
    id: "art-8",
    slug: "tedim-scholarship-fund",
    title: "New scholarship fund helps students attend university",
    summary:
      "The fund will cover tuition and travel costs for ten students in its first year.",
    publisher: mountainPost,
    originalLanguage: "ctd",
    availableTranslations: ["en"],
    category: "education",
    publishedAt: "2026-11-19T13:10:00Z",
    isFeatured: false,
  },
];