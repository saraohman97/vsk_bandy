import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Navbar from "@/components/navbar";
import Subheading from "@/components/subheading";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const PricesPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Breadcrumbs>BILJETTER OCH PRISER</Breadcrumbs>

        {/* showcase 1 */}
        <div className="grid grid-cols-2 gap-20 ml-10">
          <div>
            <Heading>KÖPA BILJETT</Heading>
            <Subheading>KÖPA BILJETT</Subheading>
            <p>
              Biljetter köpes senast 1 timme innan matchslut i biljettluckan på
              Arenan, eller förbeställ här på hemsidan. Snälla följ
              ordningsregler vid vistelsen, som kan läsas om{" "}
              <AlertDialog>
                <AlertDialogTrigger>
                  <span className="text-green-700 underline">här</span>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      För allas säkerhet och trivsel gäller följande
                      ordningsregler:
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      • Besökare är skyldig att på anmodan underkasta sig
                      visitation. <br />
                      • Det är inte tillåtet att till arenan medföra alkohol och
                      andra droger. <br />
                      • Det är inte tillåtet att till arenan medföra, inneha,
                      eller använda vapen, laserpekare, pyrotekniska varor,
                      brandfarliga vätskor eller andra farliga föremål. <br />
                      • Den som är påverkad av alkohol, droger eller andra
                      berusningsmedel medges ej tillträde till arenan. <br />
                      • Den som bär klädesplagg med text eller symbol som
                      uttrycker missaktning för folkgrupp eller annan sådan
                      grupp av personer med anspelning på hudfärg, nationellt,
                      sexuell läggning, etniskt ursprung eller religion äger
                      inte tillträde till arenan. Detsamma gäller den som önskar
                      medföra flagga, banderoll eller annat föremål med sådan
                      text eller symbol. <br />
                      • Det är enligt lag inte tillåtet att maskera sig på ett
                      sätt som försvårar identifikation och som kan befaras
                      utgöra risk för ordningsstörning. <br />
                      • Det är enligt lag inte tillåtet att inom arenan kasta
                      föremål, om inte handlingen är befogad. <br />
                      • Det är enligt lag inte tillåtet att beträda spelplanen
                      eller angränsande område innanför staketet, om inte
                      handlingen är befogad. <br />
                      • Upptagning samt överföring av ljud och rörliga bilder
                      får endast ske efter medgivande av arrangören. Samma sak
                      gäller fortlöpande textrapportering via Internet eller
                      annat medium. <br />
                      • Om arrangören eller gästande förening, samband med
                      matchen, på grund av en besökares otillbörliga beteende
                      drabbas av böter, straffavgifter enligt Svenska
                      Bandyförbundets tävlingsbestämmelser eller annan kostnad,
                      är besökaren skyldig att till fullo stå för denna. <br />
                      • Personer som gör sig skyldiga till överträdelser enligt
                      dessa ordningsregler riskerar att arrangörs avstängas från
                      samtliga bandyarenor upp till två år och anmälas till
                      åklagare enligt lag om tillträdesförbud vid
                      idrottsevenemang. Brottsliga överträdelser kommer att
                      polisanmälas. <br />• Bandymatchen kan vara
                      mediabevakad/kamera bevakad vilket kan innebära att dina
                      personuppgifter samlas in i form av stillbilds-, rörligt
                      material och ljudupptagningar. Materialet kan komma att
                      användas av press, TV och annan media eller sociala
                      nätverk. Arenans interna och lokala produktion kan
                      innebära förekomst i mediakub, TV-apparater och sociala
                      nätverk.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>Ok</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              .
            </p>
            <br />
            <Subheading>fri entre till barn till och med 16 år</Subheading>
            <p>
              Alla barn och ungdomar till och med 16 år har fri entré på alla
              hemmamatcher. Om man som barn och ungdom vill sitta ned så kostar
              detta 40:-, och dessa biljetter köps i biljettluckan utanför
              arenan i anslutning till match. Biljettluckan öppnar 1 timme före
              avslag.
            </p>
            <br />
            <br />
            <Button href="/" variant="green">
              KÖP BILJETT
            </Button>
            <br />
            <br />
            <br />
            <br />

            {/* prices */}
            <div className="flex gap-4">
              <div>
                <Subheading>VSK bandy dam</Subheading>
                <p>
                  Ordinarie <br />
                  Ståplats: 70:- <br />
                  Sittplats: 100:- <br />
                  Ungdom (17-19 år) <br />
                  Ståplats: 30:- <br />
                  Sittplats: 50:- <br />
                  MDU-studenter <br />
                  Ståplats: 30:- <br />
                  Sittplats: 30:- <br />
                  Pensionär <br />
                  Ståplats: 50:- <br />
                  Sittplats: 70:- <br />
                  Medlem i VSK Bandy <br />
                  Ståplats: 50:- <br />
                  Sittplats: 70:- <br />
                  VSK Sports <br />
                  Ståplats, Sektion A: 50:- <br />
                  (Rabattkod fås via VSK Sports)
                </p>
              </div>
              <div>
                <Subheading>VSK bandy herr</Subheading>
                <p>
                  Ordinarie <br />
                  Ståplats: 70:- <br />
                  Sittplats: 100:- <br />
                  Ungdom (17-19 år) <br />
                  Ståplats: 30:- <br />
                  Sittplats: 50:- <br />
                  MDU-studenter <br />
                  Ståplats: 30:- <br />
                  Sittplats: 30:- <br />
                  Pensionär <br />
                  Ståplats: 50:- <br />
                  Sittplats: 70:- <br />
                  Medlem i VSK Bandy <br />
                  Ståplats: 50:- <br />
                  Sittplats: 70:- <br />
                  VSK Sports <br />
                  Ståplats, Sektion A: 50:- <br />
                  (Rabattkod fås via VSK Sports)
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-around">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2017.4483957367438!2d16.528919576911083!3d59.62554357475913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e614de4e78417%3A0x64ddc20c3773a025!2sVSK%20Bandy!5e0!3m2!1ssv!2sse!4v1706048471404!5m2!1ssv!2sse"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <Image src="/vsk/image.svg" alt="" width={600} height={600} />
          </div>
        </div>

        {/* showcase 2 */}
        <div className="grid grid-cols-2 gap-20 mt-20">
          <div className="flex flex-col justify-around">
            <Image src="/vsk/image.svg" alt="" width={600} height={600} />
            <Image src="/vsk/image.svg" alt="" width={600} height={600} />
          </div>

          <div>
            <Heading>KÖPA SÄSONGSKORT</Heading>
            <p>
              Ett säsongskort innebär att alla hemmamatcher ingår, Svenska
              Cupen, träningsmatcher, seriespel och slutspel. Säkra ditt
              säsongskort redan nu! <br />
              <br /> I VSK Bandys arbete att verka för ett hållbart samhälle
              kommer alla säsongskort att vara digitala. Du har dock möjligheten
              att som tillval lägga till ett plastkort mot en kostnad på 200kr.{" "}
              <br />
              <br /> Om restriktioner råder när säsongen börjar kommer vi att
              informera säsongskortsinnehavare hur urvalsprocessen kommer att gå
              till.
            </p>
            <br />
            <br />
            <Button href="/" variant="green">
              KÖP SÄSONGSKORT
            </Button>
            <br />
            <br />
            <br />
            <br />
            <Subheading>VSK BANDY DAM OCH HERR</Subheading>
            <p>
              Ordinarie <br />
              Ståplats: 70:- <br />
              Sittplats: 100:- <br />
              Ungdom (17-19 år) <br />
              Ståplats: 30:- <br />
              Sittplats: 50:- <br />
              MDU-studenter <br />
              Ståplats: 30:- <br />
              Sittplats: 30:- <br />
              Pensionär <br />
              Ståplats: 50:- <br />
              Sittplats: 70:- <br />
              Medlem i VSK Bandy <br />
              Ståplats: 50:- <br />
              Sittplats: 70:- <br />
              VSK Sports <br />
              Ståplats, Sektion A: 50:- <br />
              (Rabattkod fås via VSK Sports)
            </p>
          </div>
        </div>

        {/* Q&A */}
        <div className="mt-20 max-w-screen-sm">
          <Heading>FRÅGOR OCH SVAR</Heading>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Jag har ett leg.kort från Svenska Bandyförbundet, hur gör jag
                då?
              </AccordionTrigger>
              <AccordionContent>
                Ta med ditt leg.kort och gå till entré B, mot uppvisande av
                leg.kort och legitimation släpps du in i arenan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Jag vill ha min sittplats som jag haft de senaste säsongerna,
                hur gör jag?
              </AccordionTrigger>
              <AccordionContent>
                Om du vill behålla din sittplats från tidigare säsonger, hör av
                dig till medlem@vskbandy.se och meddela detta. Vi reserverar
                tidigare säsongs sittplatser t.om. 15 september. Efter 15
                september släpps platserna fria.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Vad händer om restriktioner kommer tillbaka?
              </AccordionTrigger>
              <AccordionContent>
                Om restriktioner återinförs kommer vi att informera alla
                säsongskortsinnehavare kring hur vi kommer att hantera frågan
                beroende på restriktionerna ser ut. Säsongskortsinnehavare har
                alltid förtur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </>
  );
};

export default PricesPage;
