import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

export default function Button({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
    >
      {children}
    </Link>
  );
}
