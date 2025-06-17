"use client";

import Hamburger from "hamburger-react";
import { useMemo } from "react";

import { menuList } from "@/app/config/menu";
import { Button } from "@/components/ui/button/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer/drawer";

import SnsIcon from "./sns-icon";

type DrawerMenuProps = {
  direction?: "top" | "bottom" | "left" | "right";
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function DrawerMenu({
  direction = "left",
  open,
  onOpenChange,
}: DrawerMenuProps) {
  const menuItems = useMemo(
    () => (
      <ul>
        {menuList.map((item) => (
          <li key={item.path} className="flex-1">
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <item.icon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              </Button>
              <span className="text-sm">{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    ),
    [],
  );

  return (
    <Drawer direction={direction} open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button
          onClick={() => onOpenChange(!open)}
          variant="ghost"
          className="h-10 w-10 rounded-full p-0 lg:hidden"
        >
          <Hamburger toggled={open} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="grid h-full w-full grid-rows-[auto_1fr_auto]">
          <DrawerHeader>
            <DrawerTitle>world-of-zono</DrawerTitle>
          </DrawerHeader>
          <nav className="">{menuItems}</nav>
          <DrawerFooter>
            <div className="flex justify-evenly">
              <SnsIcon type="x" />
              <SnsIcon type="github" />
              <SnsIcon type="threads" />
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
