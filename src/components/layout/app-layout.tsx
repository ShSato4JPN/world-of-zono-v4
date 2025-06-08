import type { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
