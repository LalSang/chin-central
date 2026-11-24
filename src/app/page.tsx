import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import ArticleMeta from "@/components/ArticleMeta";
import FeaturedArticle from "@/components/FeaturedArticle";
import { getHomepageSections } from "@/lib/homepage";
import { articles } from "@/lib/mock-data";

export default function Home() {
  const { hero, secondary, latest } = getHomepageSections(articles);

  return (
    <main className="mx-auto max-w-7xl space-y-12 px-6 py-10">
      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          News from Chin communities, all in one place
        </h1>
        <p className="mt-3 text-lg text-gray-700">
          Reporting from verified Chin news organizations, kept in its original
          language, with English translations so every reader can follow along.
        </p>
      </section>

      <section aria-labelledby="top-stories-heading">
        <h2
          id="top-stories-heading"
          className="mb-4 text-xl font-bold text-gray-900"
        >
          Top stories
        </h2>

        {hero ? (
          <FeaturedArticle article={hero} />
        ) : (
          <p className="text-gray-600">No stories have been published yet.</p>
        )}

        {secondary.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondary.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby="latest-news-heading">
        <h2
          id="latest-news-heading"
          className="mb-4 text-xl font-bold text-gray-900"
        >
          Latest news
        </h2>

        <ul className="divide-y divide-gray-200 border-y border-gray-200">
          {latest.map((article) => (
            <li key={article.id} className="py-4">
              <h3 className="font-semibold text-gray-900">
                <Link
                  href={`/articles/${article.slug}`}
                  className="hover:underline"
                >
                  {article.title}
                </Link>
              </h3>
              <div className="mt-1">
                <ArticleMeta article={article} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
