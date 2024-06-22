import { ThemeToggler } from "@/components/theme-toggler";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <div className="absolute top-5 right-0 text-white">
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
}
