import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Navbar() {
  return (
    <nav className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
      <Link href="/">
        <Image src={logo} alt="Logo" width={40} height={40} />
      </Link>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-black">AD</AvatarFallback>
      </Avatar>
    </nav>
  );
}
