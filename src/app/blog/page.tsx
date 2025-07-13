import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getPostInfiniteQueryOptions } from "@/components/pages/blog/api/get-post";

import Blog from "./_components/blog";

export default async function page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(getPostInfiniteQueryOptions());

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Blog />
    </HydrationBoundary>
  );
}
