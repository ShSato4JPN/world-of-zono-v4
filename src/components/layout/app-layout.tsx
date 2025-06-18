import { type ReactNode } from "react";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="w-full max-w-[1300px] h-full grid grid-rows-[auto_1fr_auto]">
        <Header />
        <div className="mt-11 sm:mt-18" />
        {children}
        <Footer />
      </div>
    </div>
  );
}
