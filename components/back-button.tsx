import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

type Props = {
  text: string;
  link: string;
};

export function BackButton({ text, link }: Props) {
  return (
    <Link
      href={link}
      className="text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5">
      <ArrowLeftCircle size={18} />
      {text}
    </Link>
  );
}
