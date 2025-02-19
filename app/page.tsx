import About from "@/components/About";
import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cardlist from "@/components/Cardlist";
import Cards1 from "@/components/Cards1";
import CardWithImage from "@/components/CardWithImage";
import Hero from "@/components/Hero";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Testemonials from "@/components/Testimonials";
import { lineCardsData } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <About2 />
      <PozoviteNasOdmah />
      <CardWithImage />
      <PozoviteNasOdmahImage />
      <Cards1 title={"dodaj naslov"} data={lineCardsData} />
      <Cardlist />
      <BackgroundImage />
      <Testemonials />
    </div>
  );
}
