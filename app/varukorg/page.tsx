import Heading from "@/components/heading";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, ArrowLeftToLine } from "lucide-react";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <div className="p-10 max-w-screen-xl mx-auto">
        <Heading>VARUKORG</Heading>

        <Table>
          <TableCaption>Dina sparade produkter</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Produkt</TableHead>
              <TableHead>Pris</TableHead>
              <TableHead className="text-center">Antal</TableHead>
              <TableHead className="text-right">Totalt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium flex gap-2 items-center">
                <Image src="/product.png" alt="" width={100} height={100} />
                <div>
                  <h2 className="text-xl">T-Skirt, Grå</h2>
                  <Button variant="link">Ta bort</Button>
                </div>
              </TableCell>
              <TableCell>200 KR</TableCell>
              <TableCell className="text-center space-x-1">
                <Button variant='outline'>-</Button>
                <Button variant='default'>1</Button>
                <Button variant='outline'>+</Button>
              </TableCell>
              <TableCell className="text-right">200 KR</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="flex flex-col text-right items-end gap-2">
            <h2 className="text-lg">Totala kostnaden: 200 KR</h2>
            <small className="mb-4 text-slate-400">Taxes and shipping colculated at checkout.</small>
            <Button>Betala</Button>
            <Button variant='link'><FaArrowLeftLong className="text-gray-700 mr-2" /> Fortsätt shoppa</Button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
