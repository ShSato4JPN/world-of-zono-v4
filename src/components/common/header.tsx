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
    <nav className="h-full flex items-center space-x-10 text-lg font-medium">
      {links.map(({ label, path }) => (
        <div key={label} className="relative group">
          <Link href={path} className="relative z-10 px-1">
            {label}
            <span
              className="
                pointer-events-none
                absolute
                left-0
                bottom-[-5px]
                h-0.5
                w-full
                origin-left
                scale-x-0
                bg-current
                transition-transform
                duration-300
                group-hover:scale-x-100
              "
            />
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default function Header() {
  const { isOver } = useVerticalScroll({ threshold: 200 });

  return (
    <motion.header
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
      className={clsx(
        luckiestGuy.className,
        "sticky top-0 left-0 w-full font-bold z-50 bg-background/80 backdrop-blur shadow",
      )}
    >
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
            <Link href="/">
              <span className="text-xl sm:text-4xl">World-Of-Zono</span>
            </Link>
            <div className="flex items-center space-x-10">
              <PageLinks />
              <ThemeToggle />
            </div>
          </div>
        }
      />
    </motion.header>
  );
}
