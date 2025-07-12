"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { Tektur } from "next/font/google";
import Link from "next/link";

import { links } from "@/app/config/page-links";
import useVerticalScroll from "@/hooks/useVerticalScroll";

import MobileMenu from "./mobile-menu";
import { OnlyMobile, OnlyPc } from "./only-device";
import ThemeToggle from "./theme-toggle";

const luckiestGuy = Tektur({
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["sans-serif"],
  weight: ["500", "700"],
});

function PageLinks() {
  return (
    <div className="h-full flex items-center space-x-10 text-lg font-medium">
      {links.map(({ label, path }) => (
        <Link key={label} href={path}>
          {label}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const { isOver } = useVerticalScroll({ threshold: 200 });

  return (
    <motion.header
      className={clsx(luckiestGuy.className, "font-bold")}
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        },
        hidden: {
          y: -100,
          opacity: 0,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        },
      }}
      initial="visible"
      animate={isOver ? "hidden" : "visible"}
    >
      <nav>
        <OnlyMobile
          element={
            <div className="flex items-center justify-between p-1.5">
              <MobileMenu />
              <Link href="/">
                <span className="text-xl sm:text-4xl">World-Of-Zono</span>
              </Link>
              <ThemeToggle />
            </div>
          }
        />
        <OnlyPc
          element={
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center space-x-10">
                <Link href="/">
                  <span className="text-xl sm:text-4xl">World-Of-Zono</span>
                </Link>
                <PageLinks />
              </div>
              <ThemeToggle />
            </div>
          }
        />
      </nav>
    </motion.header>
  );
}
