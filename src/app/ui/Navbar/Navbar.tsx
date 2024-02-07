"use client";

import { navLinks } from "@/app/lib/constants";
import Image from "next/image";
import { useState } from "react";
import { NavLinks } from "./NavLinks";

export function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <header
      className={`sticky top-0 z-20 flex w-full items-center
    bg-secondary px-6 py-5`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <p className="text-4xl font-bold text-white">S/K</p>
        <nav>
          <ul className="hidden list-none flex-row gap-10 text-2xl font-semibold uppercase text-white md:flex">
            <NavLinks links={navLinks} />
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="menu"
            height={28}
            width={28}
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-0 z-10 mx-4 my-2 min-w-[140px] rounded-xl bg-secondary p-6`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              <NavLinks links={navLinks} />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
