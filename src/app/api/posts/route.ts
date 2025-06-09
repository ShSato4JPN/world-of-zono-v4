import type * as contentful from "contentful";
import type { NextRequest } from "next/server";
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

export type BlogPostsData = contentful.EntryCollection<BlogPostSkeleton>;

export async function GET(
  req: NextRequest,
): Promise<NextResponse<BlogPostsData>> {
  const searchParams = req.nextUrl.searchParams;
  const limit = Number(searchParams.get("limit") || 0);
  const skip = Number(searchParams.get("skip") || 0);

  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "worldOfZono",
    order: ["-fields.publishedAt"],
    limit,
    skip,
  });

  return NextResponse.json(entries);
}
