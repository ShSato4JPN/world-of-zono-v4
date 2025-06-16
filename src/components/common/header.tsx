"use client";

import type { JSX } from "react";
import { useMemo, useState } from "react";

import { useMenu } from "@/hooks/use-menu";

import MenuDrawer from "./menu-drawer";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const items = useMenu();

  const menuItems = useMemo<JSX.Element>(
    () => (
      <ul className="w-[450px] flex items-center justify-around">
        {items.map((item) => (
          <li key={item.path} className="flex-1">
            <a href={item.path} className="flex flex-col items-center">
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    ),
    [items],
  );

  return (
    <header className="relative w-full grid place-items-center h-11 sm:h-20 sm:p-3">
      <div className="absolute left-1 sm:hidden">
        <MenuDrawer direction="right" open={isOpen} onOpenChange={setIsOpen} />
      </div>
      <div className="flex items-center justify-center sm:justify-between w-full max-w-7xl px-4 lg:px-8">
        <div className="">
          <h1 className="text-2xl pb-1.5 sm:text-4xl">World of Zono</h1>
        </div>
        <nav className="hidden sm:block">{menuItems}</nav>
      </div>
      <ThemeToggle />
    </header>
  );
}
