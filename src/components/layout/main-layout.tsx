import { type ReactNode } from "react";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="size-full max-w-[1400px] bg-blue-200">{children}</div>
      <Footer />
    </div>
  );
}
