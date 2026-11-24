import Link from "next/link";
import type { Article } from "@/types/news";
import ArticleMeta from "@/components/ArticleMeta";

type FeaturedArticleProps = {
  article: Article;
};

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <article className="grid overflow-hidden rounded-xl border border-gray-200 bg-white md:grid-cols-2">
      {/* Placeholder until articles have real images */}
      <div className="flex min-h-48 items-end bg-blue-900 p-6">
        <span className="rounded bg-white px-2 py-1 text-xs font-semibold uppercase tracking-wide text-blue-900">
          Featured · {article.category}
        </span>
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-8">
        <h3 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          <Link href={`/articles/${article.slug}`} className="hover:underline">
            {article.title}
          </Link>
        </h3>
        <p className="text-lg text-gray-700">{article.summary}</p>
        {article.author && (
          <p className="text-sm text-gray-600">By {article.author}</p>
        )}
        <ArticleMeta article={article} />
      </div>
    </article>
  );
}