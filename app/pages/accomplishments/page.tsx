import React from 'react'
import TakahashiAward from "@/public/assets/TakahashiAward.jpg";
import Image from "next/image";

const Accomplishments = () => {
  return (
   <div className="flex min-h-screen items-center justify-center font-sans bg-[url(/assets/YugiohBG2.webp)]">
      <main className=" text-center text-white">
        <h1 className="text-3xl">Accomplishments</h1>
        <Image className="place-self-center" src={TakahashiAward} alt="Takahashi Award" />
        <br />
        <br />
        <div className="border-4 rounded-md max-w-300">
        
        
          <h4 className="text-2xl">Takahashi was a very a very influecial and acclamied manga artist. He most famously was the creator of Yugioh manga, however also had several other lesser known manga he had worked on such as The Comiq and Drump. He had a very unique artstyle mostly coming from the fact he took a massive influence from American comics instead of Japanese manga and animation, causing many of his early ideas to be shut down and resorting to making art for games companies instead. However once he was accepted his  </h4>
        </div>
      </main>
    </div>
  )
}

export default Accomplishments