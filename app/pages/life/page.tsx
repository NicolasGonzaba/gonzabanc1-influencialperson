import React from 'react'
import Image from "next/image";
import Riptide from "@/public/assets/RIPTIDEphoto01.jpg";
import LoveBall from "@/public/assets/Ing!_Love_Ball.png";
import YuGiOh from "@/public/assets/YuGiOh manga.jpg";
const Life = () => {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans bg-[url(/assets/YugiohBG2.webp)] bg-center bg-cover">
            <main className=" text-center text-white m-5">
                <h1 className="text-3xl">Life</h1>
                <div className="flex items-center justify-center flex-col-reverse lg:flex-row gap-5 lg:gap-20 ">
                    <div className="border-4 rounded-md max-w-200">

                        <h4 className="lg:text-2xl"> Kazuki Takahashi had a desire to draw at a very young age, constantly skeching in his free time and igoring his studies for it. He had planned to drop out of school entirely to be recruited as an animator at Tezuka productions but failed the recruitment exam for his unique artstyle not being up to industry standards, causing him to transition a designer for coporate logos and eventually art for games such as pachislot machines. He would still see one success in his teenage years after winning a contest in 1981 with his on shot manga Ing! Love Ball, the manga being published in Weekly Shonen Jump later that year.</h4>
                    </div>

                    <Image className="place-self-center" src={LoveBall} alt="Riptide" height={400} />

                </div>
                <br />
                <div className="flex items-center justify-center flex-col lg:flex-row gap-5 lg:gap-20">
                    <Image className="place-self-center" src={YuGiOh} alt="Riptide" height={400} />

                    <div className="border-4 rounded-md max-w-200">
                        <h4 className="lg:text-2xl"> Over the next decade after his first publication he sent propsals to Weekly Shonen Jump however they saw little success and provided no finacial gain. During this time Takahashi lived in extreme poverty, living in a wooden aprtment with no electricty. His first Major success would come with the creation of Yu-Gi-Oh in 1996, a manga inspired by his love of games that would be serialized until 2004 and sell 40 million copies. The card game portion of the manga would become so beloved that he would be approached by the company Konami to make it into a full on card game and restructure the manga to focus on it. Takahashi would later oversee an anime adaptaion of his series as well as the Yu-Gi-Oh Bonds Beyond Time and Yu-Gi-Oh The Dark Side of Dimensions movies.</h4>
                    </div>


                </div>
<br />
                <div className="flex items-center justify-center flex-col-reverse lg:flex-row vertical-align gap-5">
                    <div className="border-4 rounded-md max-w-200">

                        <h4 className="lg:text-2xl"> On July 4 2022, Takahashi had planned to take a snorkeling trip off the coast of Nago City in Okinawa. When he arrived at the coast he saw a child and her mother stuck in a Riptide so he dove in trying to help them alongside the coast guard. While the other 3 were able to escape, Takahashi did not. His body was recovered two days later on July 6, confiming his death.</h4>
                    </div>

                    <Image className="place-self-center" src={Riptide} alt="Riptide" height={400} />

                </div>
            </main>
        </div>
    )
}

export default Life