import type * as contentful from "contentful";
import { NextResponse } from "next/server";

import client from "@/libs/contentful";

export type BlogPostSkeleton = {
  contentTypeId: "worldOfZono";
  fields: {
    title: contentful.EntryFieldTypes.Text;
    body: contentful.EntryFieldTypes.Text;
    publishedAt: contentful.EntryFieldTypes.Date;
    tags: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.Symbol>;
  };
};

// Bookmark 機能を実装するため、基本的に getEntries でデータを取得して、フロント側で整合性を取る
//export type BlogPostData = contentful.Entry<BlogPostSkeleton>;
export type BlogPostData = contentful.EntryCollection<BlogPostSkeleton>;

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<BlogPostData>> {
  const { id } = await params;

  const entry = await client.getEntries<BlogPostSkeleton>({
    "sys.id[in]": id.split(","),
  });

  return NextResponse.json(entry);
}
