import { useInfiniteQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Spinner from "@/components/common/spinner";

import { getPostInfiniteQueryOptions } from "../api/get-post";
import Post from "./post";

type PostListProps = {
  onPostsPrefetch: () => void;
};

export default function PostList({ onPostsPrefetch }: PostListProps) {
  console.log(onPostsPrefetch); // TODO

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    getPostInfiniteQueryOptions(),
  );

  const posts = useMemo(
    () =>
      (
        data?.pages.map((page) =>
          page.items.map((post) => ({
            id: post.sys.id as string,
            title: post.fields.title as string,
            tags: post.fields.tags as string[],
            body: post.fields.body as string,
            createdAt: dayjs(post.fields.publishedAt as string).format(
              "YYYY/MM/DD",
            ),
          })),
        ) || []
      ).flat(),
    [data],
  );

  return (
    <div className="mt-2">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          <div className="grid place-items-center my-5">
            <Spinner />
          </div>
        }
      >
        <div className="divide-y space-y-4">
          {posts.map((post, index) => (
            <Post key={index} {...post}></Post>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
