"use client";

import { useQueryClient } from "@tanstack/react-query";

import { getPostInfiniteQueryOptions } from "@/components/pages/blog/api/get-post";
import PostList from "@/components/pages/blog/components/post-list";

export default function Blog() {
  const queryClient = useQueryClient();

  return (
    <PostList
      onPostsPrefetch={() => {
        queryClient.prefetchInfiniteQuery(getPostInfiniteQueryOptions());
      }}
    />
  );
}
