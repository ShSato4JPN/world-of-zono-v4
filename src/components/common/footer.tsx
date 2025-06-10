"use client";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

export default function Footer() {
  const copyright = `© 2022-${dayjs().year()} - world-of-zono, All Rights Reserved.`;

  return (
    <footer className="w-full text-center p-2 text-xs md:text-sm">
      <span>{copyright}</span>
    </footer>
  );
}
