"use client";
import { motion } from "framer-motion";
import { CgArrowUp } from "react-icons/cg";

import useVerticalScroll from "@/hooks/useVerticalScroll";

import { Button } from "../ui/button";

export default function ScrollUpButton() {
  const { isOver } = useVerticalScroll({ threshold: 200 });

  return (
    <motion.div
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        },
        hidden: {
          y: 100,
          opacity: 0,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        },
      }}
      initial={"hidden"}
      animate={isOver ? "visible" : "hidden"}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-10 z-50"
    >
      <Button
        variant={"ghost"}
        className="bg-orange-200 w-10 h-10 sm:w-15 sm:h-15 z-50 flex items-center justify-center p-0 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <CgArrowUp className="w-7 h-7 sm:w-10 sm:h-10" />
      </Button>
    </motion.div>
  );
}
