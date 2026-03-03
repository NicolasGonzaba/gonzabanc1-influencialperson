import React from 'react'
import TakahashiAward from "@/public/assets/TakahashiAward.jpg";
import Hellboy from "@/public/assets/HellBoy.jpg";
import yugioh from "@/public/assets/yugioh.jpg";
import Image from "next/image";

const Accomplishments = () => {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans bg-[url(/assets/YugiohBG2.webp)] bg-center bg-cover">
            <main className=" text-center text-white m-5">
                <h1 className="text-3xl">Accomplishments</h1>
                <div className="flex items-center justify-center flex-col lg:flex-row gap-5  ">

                    <Image className="place-self-center" src={yugioh} alt="yugioh" height={400} />
                    <div className="border-4 rounded-md max-w-200">

                        <h4 className="md:text-2xl"> Takahashi's most notable achivement would be his creation of Yu-Gi-Oh. The original yugioh manga sold over 40 million copies and the card game would eventually get the Guinness World Record for the best-selling trading card with more than 25.1 billion cards sold. In addition the series would make an outstanding impact on pop culture, with many memes being made about the series and iconography such as the the shadow realm and exodia still being common place today.</h4>
                    </div>

                </div>
                <br />
                <div className="flex items-center justify-center flex-col-reverse lg:flex-row gap-5 lg:gap-5">

                    <div className="border-4 rounded-md max-w-200">
                        <h4 className="md:text-2xl"> Takahashi would also become good friends with both many creators in both the comics and manga industry. Not only would he collab with Yoshi Sawai creator Bobobo-bo where they both had cameos of the other's manga in their series, but he would also do an art trade with Mike Mignola, the creator of the Hellboy comic series and partial inspriation Takahashi's own artstyle and character designs, with Mike givving Takahashi a drawing of hellboy in Yu-Gi-Oh merch </h4>
                    </div>
                    <Image className="place-self-center" src={Hellboy} alt="Riptide" height={400} />


                </div>
                <br />
                <div className="flex items-center justify-center flex-col lg:flex-row vertical-align gap-5">
                    <Image className="place-self-center" src={TakahashiAward} alt="Inkpot" height={400} />
                    <div className="border-4 rounded-md max-w-200">

                        <h4 className="md:text-2xl"> As a fan of comics takahashi would often attend San Diego Comic-con either as a attendant or a guest. In 2015 Takahashi would also recive San Diego Comic-con inkpot award for his outstanding contribution to comics and entertainment.</h4>
                    </div>



                </div>
            </main>
        </div>
    )
}

export default Accomplishments