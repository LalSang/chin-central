import Link from "next/link";
import type { Article } from "@/types/news";
import ArticleMeta from "@/components/ArticleMeta";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-5">
      <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
        {article.category}
      </span>
      <h3 className="text-lg font-semibold leading-snug text-gray-900">
        <Link href={`/articles/${article.slug}`} className="hover:underline">
          {article.title}
        </Link>
      </h3>
      <p className="line-clamp-3 text-gray-700">{article.summary}</p>
      <div className="mt-auto pt-2">
        <ArticleMeta article={article} />
      </div>
    </article>
  );
}