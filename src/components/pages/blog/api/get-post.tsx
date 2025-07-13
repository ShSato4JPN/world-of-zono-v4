import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import queryString from "query-string";

import type { BlogPostsData } from "@/app/api/posts/route";
import { api } from "@/libs/api-client";
import type { QueryConfig } from "@/libs/react-query";

// 一度に取得するデータ数
const limit = 10;

export const getPosts = async (limit: number, skip: number) => {
  return await api.get<BlogPostsData>(
    queryString.stringifyUrl({
      url: `${process.env.NEXT_PUBLIC_URL}/api/posts`,
      query: {
        limit,
        skip,
      },
    }),
  );
};

export const getPostInfiniteQueryOptions = () => {
  return infiniteQueryOptions({
    queryKey: ["posts"],
    queryFn: (ctx) => getPosts(limit, ctx.pageParam),
    getNextPageParam: (param) => param.skip + limit,
    initialPageParam: 0,
  });
};

// queryKey や queryFn 以外は呼び出し元で設定できるようにする
type uesPostsOptions = {
  queryConfig?: QueryConfig<typeof getPostInfiniteQueryOptions>;
};

// getPostInfiniteQueryOptions の値を queryConfig（queryKey と queryFn を除く） で上書きする
export const useInfinitePosts = ({ queryConfig }: uesPostsOptions) => {
  return useInfiniteQuery({ ...getPostInfiniteQueryOptions(), ...queryConfig });
};
