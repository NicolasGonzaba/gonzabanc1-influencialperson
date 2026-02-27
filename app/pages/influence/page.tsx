import React from 'react'
import TakahashiSigning from "@/public/assets/TakahashiSigning.jpg";
import Image from "next/image";

const influence = () => {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[url(/assets/YugiohBG2.webp)] bg-center bg-cover">
      <main className=" text-center text-white">
        <h1 className="text-3xl">Influence</h1>
        <Image className="place-self-center" src={TakahashiSigning} alt="Takahashi Signing" />
        <br />
        <br />
        <div className="border-4 rounded-md max-w-300">
        
        
          <h4 className="text-2xl"> Takahashi had a great influence on both the manga industry and Shonen genre, and the Yu-Gi-Oh card game would inspie many others to make their own and help shape the industry around it. However what made him have such a huge influence to me is the fact that  </h4>
        </div>
      </main>
    </div>
  )
}

export default influence