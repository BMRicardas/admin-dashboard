import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      {children}
    </div>
  );
}
