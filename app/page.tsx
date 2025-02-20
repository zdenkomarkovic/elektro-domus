import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cards1 from "@/components/Cards1";
import Cards2 from "@/components/Cards2";
// import CardWithImage from "@/components/CardWithImage";
import HeroOneImg from "@/components/HeroOneImg";

import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
// import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
// import Testemonials from "@/components/Testimonials";
import {
  cards1Data,
  cards2Data,
  cards2Data2,
  cards2Data3,
  cards2Data4,
  cards2DataText,
  cards2DataText2,
  cards2DataText3,
  cards2DataText4,
} from "@/constants/index";

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
        title={"Renoviranje i građevinski radovi"}
        data={cards2Data2}
        text={cards2DataText2}
      />
      <Cards2
        title={"Dekorativni i završni radovi"}
        data={cards2Data3}
        text={cards2DataText3}
      />
      <Cards2
        title={"Selidbe i transport van gabaritnog tereta"}
        data={cards2Data4}
        text={cards2DataText4}
      />
      <PozoviteNasOdmah />
      <Cards1 title={"Zašto odabrati Elektro Domus Niš?"} data={cards1Data} />
      {/* <CardWithImage /> */}
      /
      <BackgroundImage />
      {/* <Testemonials /> */}
    </div>
  );
}
