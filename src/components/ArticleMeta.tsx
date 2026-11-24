import Link from "next/link";
import type { Article } from "@/types/news";
import { LANGUAGE_NAMES } from "@/lib/languages";
import { formatDate } from "@/lib/format";

type ArticleMetaProps = {
  article: Article;
};

export default function ArticleMeta({ article }: ArticleMetaProps) {
  const hasEnglishTranslation =
    article.originalLanguage !== "en" &&
    article.availableTranslations.includes("en");

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600">
      <Link
        href={`/sources/${article.publisher.slug}`}
        className="font-semibold text-gray-900 hover:underline"
      >
        {article.publisher.name}
      </Link>
      <span aria-hidden="true">·</span>
      <time dateTime={article.publishedAt}>
        {formatDate(article.publishedAt)}
      </time>
      <span aria-hidden="true">·</span>
      <span>{LANGUAGE_NAMES[article.originalLanguage]}</span>
      {hasEnglishTranslation && (
        <span className="rounded bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700">
          English available
        </span>
      )}
    </div>
  );
}