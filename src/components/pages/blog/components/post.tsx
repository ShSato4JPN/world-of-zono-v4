import { stripHtml } from "string-strip-html";

type PostProps = {
  title: string;
  tags: string[];
  body: string;
  createdAt: string;
};

export default function Post({ title, tags, body, createdAt }: PostProps) {
  return (
    <div>
      <div className="text-xl">{createdAt}</div>
      <div className="text-2xl">{title}</div>
      <div className="flex gap-4">
        {tags.map((tag) => (
          <div key={tag} className="py-1 px-3 border-2 rounded-md">
            # {tag}
          </div>
        ))}
      </div>
      <div className="line-clamp-3">{stripHtml(body).result}</div>
    </div>
  );
}
