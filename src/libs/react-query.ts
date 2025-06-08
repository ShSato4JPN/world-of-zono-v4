import type { DefaultOptions } from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    // window にフォーカスタイミングでフェッチしない
    refetchOnWindowFocus: false,
    // フェッチに失敗さたら際フェッチしない
    retry: false,
    // 際フェッチスパン（60s）
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions;

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
  Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<
  ReturnType<T>,
  "queryKey" | "queryFn"
>;

// export type MutationConfig<
//   MutationFnType extends (...args: any) => Promise<any>,
// > = UseMutationOptions<
//   ApiFnReturnType<MutationFnType>,
//   Error,
//   Parameters<MutationFnType>[0]
// >;
