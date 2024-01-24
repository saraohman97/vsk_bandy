"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import MainButton from "./button";
import Link from "next/link";
import { useState } from "react";
import DropdownMenu from "./dropdown-menu";

const Navbar = () => {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleDropdownMenu = () => {
    openDropdownMenu ? setOpenDropdownMenu(false) : setOpenDropdownMenu(true);
  };

  const toggleMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  return (
    <div className="h-32">
      <div className="fixed top-0 z-30 w-full">
        <div className="relative w-full bg-green-800/90 p-2">
          <Image
            src="/bg.jpg"
            alt=""
            fill
            className="absolute object-cover -z-10"
          />

          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image src="/logo.png" alt="" width={60} height={60} />
            </Link>

            {/* Main nav */}
            <div className="flex justify-end items-center">
              <Button className="text-white" variant="link">
                NYHETER
              </Button>

              <Button
                onClick={() => toggleDropdownMenu()}
                className="text-white relative"
                variant="link"
              >
                MATCHER OCH BILJETTER
                {openDropdownMenu && <DropdownMenu links={links} />}
              </Button>

              <Button
                onClick={() => toggleMenu()}
                className="text-white relative"
                variant="link"
              >
                LAG OCH STRATEGI
                {openMenu && <DropdownMenu links={secondLinks} />}
              </Button>
              <Button className="text-white" variant="link">
                PARTNERS
              </Button>
              <Button className="text-white" variant="link">
                MINI SPELARE
              </Button>
              <Link href="/shop">
                <Button className="text-white" variant="link">
                  SHOP
                </Button>
              </Link>
              <MainButton variant="white" href={"https://www.vskbandyplay.se"}>
                VSK BANDY PLAY
              </MainButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const links = [
  {
    name: "BILJETTER OCH PRISER",
    href: "/",
  },
  {
    name: "SPELSCHEMA",
    href: "/",
  },
  {
    name: "BOKA EVENEMANG",
    href: "/",
  },
  {
    name: "CUPAR",
    href: "/",
  },
];

const secondLinks = [
  {
    name: "LAGET",
    href: "/",
  },
  {
    name: "ORGANISATION",
    href: "/",
  },
  {
    name: "HISTORIA",
    href: "/",
    historyLinks: [
      {
        name: "VÅR HISTORIA",
        href: "/",
      },
      {
        name: "WALL OF FAME",
        href: "/",
      },
    ],
  },
  {
    name: "REGLER",
    href: "/",
  },
];
