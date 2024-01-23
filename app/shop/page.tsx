import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "T-skirt, grå",
    price: "200",
    image: "/product.png",
  },
  {
    id: 2,
    title: "T-skirt, grå",
    price: "200",
    image: "/product.png",
  },
  {
    id: 3,
    title: "T-skirt, grå",
    price: "200",
    image: "/product.png",
  },
  {
    id: 4,
    title: "T-skirt, grå",
    price: "200",
    image: "/product.png",
  },
  {
    id: 5,
    title: "T-skirt, grå",
    price: "200",
    image: "/product.png",
  },
  {
    id: 6,
    title: "T-skirt, grå",
    price: "200",
    image: "/product.png",
  },
];

const ShopPage = () => {
  return (
    <>
      <Navbar />
      <div className="p-10 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2 text-green-700 text-xs font-semibold">
          <Link href="/" className="hover:underline">
            VIK
          </Link>
          <GoChevronRight size={20} />
          <div>SHOP</div>
        </div>

        {/* Filtering */}
        <div className="flex items-center gap-4 pt-10">
          <Button variant="link" className="text-green-700 font-bold underline">
            ALLT
          </Button>
          <Button variant="link" className="text-green-700 font-bold">
            KLÄDER
          </Button>
          <Button variant="link" className="text-green-700 font-bold">
            INREDNING
          </Button>
          <Button variant="link" className="text-green-700 font-bold">
            ANNAT
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-10 p-10">
          {/* Products */}
          {products?.map((product) => (
            <div key={product.id} className="relative group">
              <div className="invisible group-hover:visible top-0 flex ">
              <FaInstagram className="m-2 cursor-pointer" size={20} />
          <FaFacebookF className="m-2 cursor-pointer" size={20} />
              </div>
              <Image
                src={product.image}
                alt={product.title}
                height={300}
                width={300}
              />
              <h2 className="text-green-700 text-lg capitalize font-bold mt-2 mb-1">
                {product.title}
              </h2>
              <p className="text-green-700 text-sm font-bold mb-2">
                {product.price}KR
              </p>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Storlek" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="xs">X small</SelectItem>
                    <SelectItem value="sm">Small</SelectItem>
                    <SelectItem value="md">Medium</SelectItem>
                    <SelectItem value="lg">Large</SelectItem>
                    <SelectItem value="xl">X large</SelectItem>
                    <SelectItem value="2xl">2X large</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-fit invisible group-hover:visible">Köp</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
