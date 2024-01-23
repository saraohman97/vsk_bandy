import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-800 text-white mt-20">
      <div className="max-w-screen-lg mx-auto px-4 py-20 flex items-center gap-4 justify-around">
        <Link href="/">
          <Image src="/logo.png" alt="" width={150} height={150} />
        </Link>

        <div>
          <span className="font-bold">KONTAKT</span>
          <p>
            ABB Arena Syd | Bandystugan | 722 17 Västerås <br />
            Telefon: 021-41 34 15 <br />
            E-post: kansliet@vskbandy.se <br />
            Bankgiro: 997-0062
          </p>
        </div>

        <div>
          <p className="font-bold">FÖLJ VSK BANDY</p>
          <div className="flex">
            <Link
              href="/"
              className="border-2 border-white rounded-full m-2 hover:border-yellow-500 hover:text-yellow-500"
            >
              <FaInstagram className="m-2" size={20} />
            </Link>
            <Link
              href="/"
              className="border-2 border-white rounded-full m-2 hover:border-yellow-500 hover:text-yellow-500"
            >
              <FaFacebookF className="m-2" size={20} />
            </Link>
            <Link
              href="/"
              className="border-2 border-white rounded-full m-2 hover:border-yellow-500 hover:text-yellow-500"
            >
              <FaTwitter className="m-2" size={20} />
            </Link>
            <Link
              href="/"
              className="border-2 border-white rounded-full m-2 hover:border-yellow-500 hover:text-yellow-500"
            >
              <FaLinkedinIn className="m-2" size={20} />
            </Link>
            <Link
              href="/"
              className="border-2 border-white rounded-full m-2 hover:border-yellow-500 hover:text-yellow-500"
            >
              <FaYoutube className="m-2" size={20} />
            </Link>
            <Link
              href="/"
              className="border-2 border-white rounded-full m-2 hover:border-yellow-500 hover:text-yellow-500"
            >
              <FaTiktok className="m-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
