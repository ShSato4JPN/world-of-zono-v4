import { type ReactNode } from "react";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

import ScrollUpButton from "../common/scroll-up-button";

type AppLayoutProps = {
  children: ReactNode;
};

function Spacer() {
  return <div className="mt-13 sm:mt-18" />;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="w-full max-w-[1300px] h-full grid grid-rows-[auto_1fr_auto]">
        <Header />
        <Spacer />
        <div>{children}</div>
        <ScrollUpButton />
        <Footer />
      </div>
    </div>
  );
}
