import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1">
        <Image
          src={"/public/assets/icons/logo.svg"}
          alt="logo"
          width={120}
          height={32}
          className="hidden md:block cursor-pointer"
        />
        <Image
          src={"/public/assets/icons/logo-icon.svg"}
          alt="logo"
          width={32}
          height={32}
          className="md:hidden mr-2  cursor-pointer"
        />
      </Link>

      {children}
    </div>
  );
};
export default Header;
