import Image from "@/node_modules/next/image";
import React from "react";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 pt-10 md:pt-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className="  space-y-3 md:space-y-8">
          <h2 className="text-4xl font-bold md:text-6xl text-primary flex flex-col  text-center">
            Elektro Domus Niš
          </h2>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            <span className="font-bold">Elektro Domus Niš</span> pruža širok
            spektar usluga, od izgradnje novih i renoviranja postojećih objekata
            do specijalizovanih elektro i dekorativnih radova. Sa dugogodišnjim
            iskustvom, garantujemo kvalitet i pouzdanost u svakom projektu.
            Pružamo široku paletu usluga
          </p>
          <h3 className="text-3xl font-bold md:text-5xl text-center">
            Širok spektar usluga na jednom mestu
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About2;
