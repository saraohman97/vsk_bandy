import Image from "next/image";
import { Button } from "./ui/button";
import MainButton from "./main-button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-32">

    <div className="fixed top-0 z-50 w-full">
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
            <Button className="text-white" variant="link">
              MATCHER OCH BILJETTER
            </Button>
            <Button className="text-white" variant="link">
              LAG OCH STRATEGI
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
            <MainButton variant="white">VSK BANDY PLAY</MainButton>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Navbar;
