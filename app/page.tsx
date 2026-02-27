import Image from "next/image";
import Header from "./components/Header";
import Takahashi from "@/public/assets/Kazuki_takahashi.jpg";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[url(/assets/YugiohBG2.webp)] bg-center bg-cover">
      <main className=" text-center text-white">
        <h1 className="text-3xl">Kazuki Takhashi</h1>
        <div className="flex items-center justify-between gap-20">

            <Image className="place-self-center" src={Takahashi} alt="Kazuki Takahashi" />
           
        <br />
        <br />
        <div className="border-4 rounded-md max-w-150">
        
        
          <h4 className="text-2xl">Takahashi was a very influencial and acclamied manga artist. He most famously was the creator of Yugioh manga, however he also had several other lesser known manga he had worked on such as The Comiq and Drump. He had a very unique artstyle mostly coming from the fact he took a massive influence from American comics instead of Japanese manga and animation, causing many of his early ideas to be shut down and resorting to making art for games companies instead. However once he was accepted his manga and later adaptations went on to enrapture and inspire people around the world.  </h4>
        </div>
       
        </div>
      </main>
    </div>
  );
}


// bg-zinc-50  dark:bg-black