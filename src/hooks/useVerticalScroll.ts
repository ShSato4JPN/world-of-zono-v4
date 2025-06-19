import { useEffect, useState } from "react";

type useVerticalScrollProps = {
  threshold: number;
};

export default function useVerticalScroll({
  threshold,
}: useVerticalScrollProps) {
  const [isOver, setIsOver] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (threshold < currentScrollY && lastScrollY < currentScrollY) {
        setIsOver(true);
      } else {
        setIsOver(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, threshold]);

  return { isOver };
}
