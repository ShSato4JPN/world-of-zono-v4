import { type ReactNode } from "react";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="gird place-items-center">
        <main className="size-full max-w-[1400px]">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
