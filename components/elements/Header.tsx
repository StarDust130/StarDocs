import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="flex justify-center items-center">
        <span className=" text-4xl md:text-3xl">🌟</span>
        <p className="font-bold hidden text-lg sm:block ">StarDocs</p>
      </Link>

      {children}
    </div>
  );
};
export default Header;
