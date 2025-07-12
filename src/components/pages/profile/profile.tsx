import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

import { sns } from "@/components/config/sns";

function SnsLinks() {
  return (
    <div className="flex space-x-10">
      {sns.map(({ icon: Icon, label, url }) => (
        <Link key={label} href={url}>
          <Icon size={28} />
        </Link>
      ))}
    </div>
  );
}

export default function Profile() {
  return (
    <div className="h-full grid place-items-center p-5">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-full grid place-items-center">
          <Avatar>
            <AvatarImage
              src="/profile.svg"
              alt="world of zono"
              className="w-[300px] sm:w-sm rounded-full border-2 border-gray-300"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full mt-10 sm:mt-0">
          <div className="space-y-5 text-center">
            <p>はじめまして👋</p>
            <p>都内で Web エンジニアとして働いている ZONO です</p>
            <p>いまだに 30 歳になったことを受け入れられない 94 年生まれ</p>
            <p>趣味はギターで、ステージに立って演奏することもしばしば</p>
            <p>
              「何事もまずは挑戦！」をモットーに、好きなものはとことん追求する性格です！
            </p>
          </div>
          <div className="grid place-items-center mt-10">
            <SnsLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
