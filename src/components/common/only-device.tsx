import type { ReactNode } from "react";

type OnlyProps = {
  element: ReactNode;
};

export function OnlyMobile({ element }: OnlyProps) {
  return <div className="sm:hidden">{element}</div>;
}

export function OnlyPc({ element }: OnlyProps) {
  return <div className="hidden sm:block">{element}</div>;
}
