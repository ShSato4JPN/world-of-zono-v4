"use client";

import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

import { links } from "@/app/config/page-links";
import { sns } from "@/app/config/sns";
import { Button } from "@/components/ui/button/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer/drawer";

type DrawerMenuProps = {
  direction?: "top" | "bottom" | "left" | "right";
};

function PageLinks() {
  return (
    <nav className="flex flex-col">
      {links.map(({ icon: Icon, label, path }) => (
        <Link
          key={label}
          href={path}
          className="flex items-center p-2 space-x-2"
        >
          <Icon />
          <span className="text-md">{label}</span>
        </Link>
      ))}
    </nav>
  );
}

function SnsLinks() {
  return (
    <div className="flex items-center justify-around">
      {sns.map(({ icon: Icon, label, url }) => (
        <Link key={label} href={url}>
          <Icon size={28} />
        </Link>
      ))}
    </div>
  );
}

export default function MobileMenu({ direction = "right" }: DrawerMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Drawer
      direction={direction}
      open={isOpen}
      onOpenChange={() => setIsOpen((open) => !open)}
    >
      <DrawerTrigger asChild>
        <Button variant="ghost" className="p-0">
          <Hamburger toggled={isOpen} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader />
        <PageLinks />
        <DrawerFooter>
          <SnsLinks />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
