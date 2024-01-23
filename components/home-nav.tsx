import MainButton from "@/components/main-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HomeNavbar = () => {
  return (
    <div className="w-full bg-green-800/90 p-4 relative">
      <Image
        src="/bg.jpg"
        alt=""
        fill
        className="absolute object-cover -z-10"
      />
      <div className="max-w-screen-xl mx-auto">
        {/* Nav */}
        <div className="flex justify-end text-white w-full gap-2">
          <small className="p-2 cursor-pointer">Öppettider</small>
          <small className="p-2 cursor-pointer">Kontakta oss</small>
          <FaInstagram className="m-2 cursor-pointer" size={20} />
          <FaFacebookF className="m-2 cursor-pointer" size={20} />
        </div>

        {/* Main nav */}
        <div className="flex justify-end items-center my-6 pb-28">
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
          <MainButton variant="white" href={'https://www.vskbandyplay.se'}>VSK BANDY PLAY</MainButton>
        </div>

        {/* Logo */}
        <Image
          src="/logo.png"
          alt=""
          width={200}
          height={200}
          className="absolute -bottom-[100px] left-1/2 transform -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default HomeNavbar;
