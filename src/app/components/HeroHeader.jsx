"use client";

import Image from "next/image";

const HeroHeader = () => {
  return (
    <>
      <Image
        src="/UNDYSIA.png"
        alt="logo Undysia"
        width={300}
        height={150}
        className="absolute"
      />
      <div className=" text-center flex flex-col justify-center items-center max-w pt-48 md:pt-24 md:flex-row">
        <div className="flex-col">
          <p className="py-6 text-2xl text-center italic font-thin text-black w-96 md:text-left">
            Bienvenue sur <span className="text-primary text-2xl">UNDYSIA</span>
            , votre solution de rédaction {"\n"}adaptée aux personnes
            dyslexiques {"\n"}
            et malvoyantes. {"\n"}
            Nous vous aidons dans la{"\n"}
            rédaction de vos CV{"\n"} et lettres de motivation.
          </p>
          <section id="section10" className="demo">
            <button className="w-40 h-12 mx-2 mb-4 rounded bg-primary text-text border-2 border-black hover:bg-bh">
              <a href="#prompt-zone">Commencer</a>
            </button>
          </section>
        </div>
        <Image src="/home.jpeg" alt="home" width={500} height={500} />
      </div>
    </>
  );
};

export default HeroHeader;
