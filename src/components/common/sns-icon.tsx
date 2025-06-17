import { snsList } from "@/app/config/sns";

type SnsIconProps = {
  type: string;
};

export default function SnsIcon({ type }: SnsIconProps) {
  const sns = snsList.filter((v) => v.name === type).at(0);

  if (sns === undefined) {
    return null;
  }

  return (
    <a
      href={sns.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl text-gray-700 hover:text-gray-900 transition-colors"
    >
      <sns.icon />
    </a>
  );
}
