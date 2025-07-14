"use client";

import PostEntry from "@/components/pages/blog/components/post-entry";

type BlogProps = {
  id: string;
};

export default function Blog({ id }: BlogProps) {
  return <PostEntry id={id} />;
}
