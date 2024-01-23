import Heading from "@/components/heading";
import HomeNavbar from "../components/home-nav";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <HomeNavbar />
      <div className="p-5 max-w-[1200px] mx-auto">
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

              <div className="bg-white p-2 rounded-full h-36 w-36 cursor-pointer">
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

              <div className="bg-white p-2 rounded-full h-36 w-36 cursor-pointer">
                <div className="text-xl border-4 border-green-700 bg-white text-green-700 font-semibold rounded-full h-full flex flex-col items-center justify-center p-2">
                  KÖP DIN
                  <span className="text-sm">BILJETT HÄR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 max-w-screen-xl mx-auto">
        <Heading>VAD HÄNDE I VECKAN</Heading>
        <div className="flex items-center w-full gap-4">
          {articles?.map((item) => (
            <div key={item.id} className="flex flex-col text-green-700">
              <small className="text-xs">{item.date}</small>
              <Image
                src={item.image}
                alt={item.heading}
                width={300}
                height={300}
              />
              <div className="text-xl capitalize">{item.heading}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 max-w-[1200px] mx-auto mt-10">
        <div className="bg-green-800/90 text-white p-10 relative rounded-3xl text-5xl font-bold flex flex-col items-center justify-center gap-4">
          <Image
            src="/bg.jpg"
            alt=""
            fill
            className="absolute object-cover -z-10 rounded-3xl"
          />
          <h1 className="cursor-pointer">SE MATCHER PÅ </h1>
          <h1 className="flex items-center gap-4 cursor-pointer">
            BANDY.SE <FaPlay size={20} />
          </h1>
        </div>
      </div>

      <div className="p-5 max-w-screen-xl mx-auto">
        <Heading>DIAMANT- OCH GULDPARTNERS</Heading>
        <div className="flex items-center justify-around gap-10">
          {partners?.map((item) => (
            <Image
              key={item.id}
              src={item.image}
              alt=""
              width={200}
              height={200}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const articles = [
  {
    id: 1,
    heading: "VSK-försvararens debut i landslaget – tre minuter på isen",
    image: "/article.png",
    site: "VLT",
    date: "12 januari 2024",
  },
  {
    id: 2,
    heading: "VSK-försvararens debut i landslaget – tre minuter på isen",
    image: "/article.png",
    site: "VLT",
    date: "12 januari 2024",
  },
  {
    id: 3,
    heading: "VSK-försvararens debut i landslaget – tre minuter på isen",
    image: "/article.png",
    site: "VLT",
    date: "12 januari 2024",
  },
  {
    id: 4,
    heading: "VSK-försvararens debut i landslaget – tre minuter på isen",
    image: "/article.png",
    site: "VLT",
    date: "12 januari 2024",
  },
];

const partners = [
  {
    id: 1,
    image: "/partner.png",
  },
  {
    id: 2,
    image: "/partner.png",
  },
  {
    id: 3,
    image: "/partner.png",
  },
  {
    id: 4,
    image: "/partner.png",
  },
  {
    id: 5,
    image: "/partner.png",
  },
];
