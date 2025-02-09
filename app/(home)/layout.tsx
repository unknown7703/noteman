import { ChildProps } from "@/types";
import React from "react";
import { Navbar } from "./components";

const HomeLayout = ({ children }: ChildProps) => {
  return (
    <div className="h-auto bg-white dark:bg-[#212121] bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] dark:bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:16px_16px]">
      <Navbar />
      <main className="h-full pt-36">{children}</main>
    </div>
  );
};

export default HomeLayout;
