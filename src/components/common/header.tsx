"use client";

import type { JSX } from "react";
import { useMemo, useState } from "react";

import { menuList } from "@/app/config/menu";

import { Button } from "../ui/button";
import MenuDrawer from "./menu-drawer";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <header className="relative w-full grid place-items-center h-11 sm:p-2 sm:h-20">
      <div className="absolute left-1 sm:hidden">
        <MenuDrawer direction="right" open={isOpen} onOpenChange={setIsOpen} />
      </div>
      <div className="flex items-center justify-center sm:justify-between w-full max-w-7xl px-4 lg:px-8">
        <h1 className="text-2xl pb-1.5 sm:text-4xl">World of Zono</h1>
        <nav className="hidden sm:block">{menuItems}</nav>
      </div>
      <div className="absolute right-1 sm:hidden">
        <ThemeToggle />
      </div>
    </header>
  );
}
