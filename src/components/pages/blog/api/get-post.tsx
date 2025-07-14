import { queryOptions, useQuery } from "@tanstack/react-query";
import queryString from "query-string";

import type { BlogPostData } from "@/app/api/posts/[id]/route";
import { api } from "@/libs/api-client";
import type { QueryConfig } from "@/libs/react-query";

export const getPost = async ({ id }: { id: string }) => {
  return await api.get<BlogPostData>(
    queryString.stringifyUrl({
      url: `${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`,
    }),
  );
};

export const getPostQueryOptions = ({ id }: { id: string }) => {
  return queryOptions({
    queryKey: ["post", id],
    queryFn: () => getPost({ id }),
  });
};

// queryKey や queryFn 以外は呼び出し元で設定できるようにする
type uesPostOptions = {
  id: string;
  queryConfig?: QueryConfig<typeof getPostQueryOptions>;
};

// getPostInfiniteQueryOptions の値を queryConfig（queryKey と queryFn を除く） で上書きする
export const usePost = ({ id, queryConfig }: uesPostOptions) => {
  return useQuery({ ...getPostQueryOptions({ id }), ...queryConfig });
};
