import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getPostInfiniteQueryOptions } from "@/components/pages/blog/api/get-posts";

import BlogTop from "./_components/blog-top";

export default async function page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(getPostInfiniteQueryOptions());

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <BlogTop />
    </HydrationBoundary>
  );
}
