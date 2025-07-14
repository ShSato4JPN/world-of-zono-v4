"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { stripHtml } from "string-strip-html";

import Spinner from "@/components/common/spinner";

import { getPostInfiniteQueryOptions } from "../api/get-posts";

type PostProps = {
  id: string;
  title: string;
  tags: string[];
  body: string;
  createdAt: string;
};

function Post({ id, title, tags, body, createdAt }: PostProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm">{createdAt}</div>
      <Link href={`/blog/${id}`}>
        <div className="text-lg sm:text-2xl">{title}</div>
      </Link>
      <div className="flex gap-1">
        {tags.map((tag) => (
          <div key={tag} className="py-0.5 px-1.5 border-2 rounded-sm text-sm">
            # {tag}
          </div>
        ))}
      </div>
      <div className="overflow-hidden break-words break-all line-clamp-3">
        {stripHtml(body).result}
      </div>
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

type PostListProps = {
  onPostPrefetch: () => void;
};

export default function PostsList({ onPostPrefetch }: PostListProps) {
  console.log(onPostPrefetch); // TODO

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
    <div className="box-border p-3">
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
            <Post key={index} {...post} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
