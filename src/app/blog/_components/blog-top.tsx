"use client";

import { useQueryClient } from "@tanstack/react-query";

import { getPostInfiniteQueryOptions } from "@/components/pages/blog/api/get-posts";
import PostsList from "@/components/pages/blog/components/posts-list";

export default function BlogTop() {
  const queryClient = useQueryClient();

  return (
    <PostsList
      onPostPrefetch={() => {
        queryClient.prefetchInfiniteQuery(getPostInfiniteQueryOptions());
      }}
    />
  );
}
