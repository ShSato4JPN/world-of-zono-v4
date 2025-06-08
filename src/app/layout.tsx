import "./globals.css";

import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";

import AppLayout from "@/components/layout/app-layout";

import AppProvider from "./provider";

const zenMaruGothic = Zen_Maru_Gothic({
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["sans-serif"],
  weight: ["500", "700", "900"],
});

export const metadata: Metadata = {
  title: "World Of Zono",
  description: "いろいろなことを書いていくゆる〜いブログです。",
  openGraph: {
    title: "World Of Zono",
    description: "いろいろなことを書いていくゆる〜いブログです。",
    siteName: "World Of Zono",
    images: {
      url: `${process.env.NEXT_PUBLIC_URL}/og-image.webp`,
      alt: "サイトイメージ",
      width: "1200",
      height: "630",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenMaruGothic.className}`}>
        <AppProvider>
          <AppLayout>{children}</AppLayout>
        </AppProvider>
      </body>
    </html>
  );
}
