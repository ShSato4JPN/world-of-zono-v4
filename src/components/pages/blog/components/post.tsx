import Link from "next/link";
import { useRouter } from "next/navigation";
import { stripHtml } from "string-strip-html";

type PostProps = {
  id: string;
  title: string;
  tags: string[];
  body: string;
  createdAt: string;
};

export default function Post({ id, title, tags, body, createdAt }: PostProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <div className="text-md">{createdAt}</div>
      <Link href={`/blog/${id}`}>
        <div className="text-2xl">{title}</div>
      </Link>
      <div className="flex gap-1">
        {tags.map((tag) => (
          <div key={tag} className="py-0.5 px-1.5 border-2 rounded-sm text-sm">
            # {tag}
          </div>
        ))}
      </div>
      <div className="line-clamp-3">{stripHtml(body).result}</div>
      <div className="grid place-items-center mb-2">
        <button
          type="button"
          className="py-0.5 px-1.5 border-2 rounded-sm text-sm"
          onClick={() => router.push(`/blog/${id}`)}
        >
          続きを読む
        </button>
      </div>
    </div>
  );
}
