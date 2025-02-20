import About from "@/components/About";
import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cards2 from "@/components/Cards2";
import CardWithImage from "@/components/CardWithImage";
import HeroOneImg from "@/components/HeroOneImg";

import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Testemonials from "@/components/Testimonials";
import { cards2Data, cards2DataText, lineCardsData } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />

      <About2 />
      <Cards2
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      />
      <Cards2
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      />
      <Cards2
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      />
      <PozoviteNasOdmah />
      <CardWithImage />
      <PozoviteNasOdmahImage />

      <BackgroundImage />
      <Testemonials />
    </div>
  );
}
