"use client";
import { motion } from "framer-motion";
import type { JSX } from "react";
import { useMemo } from "react";

import { menuList } from "@/app/config/menu";
import useVerticalScroll from "@/hooks/useVerticalScroll";

import { Button } from "../ui/button";
import MenuDrawer from "./menu-drawer";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const { isOver } = useVerticalScroll({ threshold: 200 });

  const menuItems = useMemo<JSX.Element>(
    () => (
      <ul className="w-[450px] flex items-center justify-around">
        {menuList.map((item) => (
          <li key={item.path} className="flex-1">
            <div className="flex flex-col items-center">
              <Button variant="ghost" size="icon">
                <item.icon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              </Button>
              <span className="text-sm">{item.label}</span>
            </div>
          </li>
        ))}
        <li className="flex-1">
          <div className="flex flex-col items-center">
            <ThemeToggle />
            <span className="text-sm">theme</span>
          </div>
        </li>
      </ul>
    ),
    [],
  );

  return (
    <motion.header
      className="fixed grid place-items-center top-0 left-0 right-0 z-50 p-1.5 sm:p-0 bg-background/80 backdrop-blur shadow"
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
      <div className="w-full max-w-[1300px] grid grid-cols-[auto_1fr_auto] sm:grid-cols-1">
        <div className="grid place-items-center sm:hidden">
          <MenuDrawer direction="right" />
        </div>
        <div className="flex flex-row items-center justify-center sm:justify-around">
          <h1 className="font-bold text-center text-xl sm:text-4xl">
            World of Zono
          </h1>
          <nav className="hidden sm:block sm:p-1">{menuItems}</nav>
        </div>
        <div className="grid place-items-center sm:hidden">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
