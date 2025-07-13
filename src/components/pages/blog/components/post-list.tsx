import { useInfiniteQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import Spinner from "@/components/common/spinner";

import { getPostInfiniteQueryOptions } from "../api/get-post";
import Post from "./post";

type PostListProps = {
  onPostsPrefetch: () => void;
};

export default function PostList({ onPostsPrefetch }: PostListProps) {
  console.log(onPostsPrefetch); // TODO エラー回避

  const postsInfiniteQuery = useInfiniteQuery(getPostInfiniteQueryOptions());

  const { ref, inView } = useInView({ threshold: 0 });

  const posts = useMemo(
    () =>
      (
        postsInfiniteQuery.data?.pages.map((page) =>
          page.items.map((post) => ({
            title: post.fields.title as string,
            tags: post.fields.tags as string[],
            body: post.fields.body as string,
            createdAt: dayjs(post.fields.publishedAt as string).format(
              "YYYY/MM/DD",
            ),
          })),
        ) || []
      ).flat(),
    [postsInfiniteQuery.data],
  );

  return (
    <div>
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
        {posts.map((post, index) => (
          <Post key={index} {...post}></Post>
        ))}
      </div>
      {postsInfiniteQuery.isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
