import Heading from "@/components/heading";
import HomeNavbar from "../components/home-nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeNavbar />
      <div className="p-5 mt-20 max-w-[1200px] mx-auto">
        <Heading>NÄSTA MATCH</Heading>
        <div className="bg-green-800/90 text-white p-10 relative rounded-3xl">
          <Image
            src="/bg.jpg"
            alt=""
            fill
            className="absolute object-cover -z-10 rounded-3xl"
          />

          {/* Showcase */}
          <div className="flex items-center justify-around gap-6">
            {/* Herr */}
            <div className="flex items-center justify-between w-full lg:h-36">
              <div>
                <p className="underline text-sm mb-2">Herr</p>
                <h2 className="text-2xl">
                  VSK vs. VETLANDA BK | <br />
                  Onsdag 31 januari 2023
                </h2>
              </div>

              <div className="bg-white p-2 rounded-full h-36 w-36">
                <div className="text-xl border-4 border-green-700 bg-white text-green-700 font-semibold rounded-full h-full flex flex-col items-center justify-center p-2">
                  KÖP DIN
                  <span className="text-sm">BILJETT HÄR</span>
                </div>
              </div>
            </div>

            {/* Hr */}
            <div className="h-32 w-1 mx-4 bg-white" />

            {/* Dam */}
            <div className="flex items-center justify-between w-full lg:h-36">
              <div>
                <p className="underline text-sm mb-2">Dam</p>
                <h2 className="text-2xl">
                  VSK vs. VETLANDA BK | <br />
                  Onsdag 31 januari 2023
                </h2>
              </div>

              <div className="bg-white p-2 rounded-full h-36 w-36">
                <div className="text-xl border-4 border-green-700 bg-white text-green-700 font-semibold rounded-full h-full flex flex-col items-center justify-center p-2">
                  KÖP DIN
                  <span className="text-sm">BILJETT HÄR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
