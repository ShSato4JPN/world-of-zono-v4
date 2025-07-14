import { usePost } from "../api/get-post";

type PostEntry = {
  id: string;
};

export default function PostEntry({ id }: PostEntry) {
  const post = usePost({ id });

  if (post.isLoading) {
    return <div>loading...</div>;
  }

  return <div>{JSON.stringify(post)}</div>;
}
