import React, { FC } from "react";

interface HeaderProps {
  active: string;
}
const Header: FC<HeaderProps> = ({ active }) => {
  return (
    <div className="flex h-24 items-center border-b-2 mb-2 px-8">
        <h1 className="font-bold text-[32px]"> ABC Pty.Ltd.</h1>
      <div className="flex-1"></div>
      
      <div className="flex gap-2">
        <a
          href="/"
          className={
             "flex h-11 items-center justify-center rounded-lg font-semibold " + (active == "home" ? "bg-green-500 text-white " : "")
          }
        >
          Home
        </a>
        <a
          href="/about"
          className={
            "flex h-11 items-center justify-center rounded-lg font-semibold " + ( active == "about" ? "bg-green-500 text-white " : "")
          }
        >
          About
        </a>
      </div>
    </div>
  );
};

export default Header;
