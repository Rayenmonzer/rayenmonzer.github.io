import React from "react";
import { SectionWrapper } from "../../../hoc";
import { logo,h1,h2,h3,h4 } from "../../../assets/img/img";
import { aShishTaouk,aShawarma } from "../../../assets/img/img";

const Hero = () => (
    <div className="flex flex-col justify-center sm:h-[70vh] h-[80vh] items-center">
        <img className="w-fit h-fit" src={logo} alt="logo"/>
        <p className="text-[30px] font-light text-center">Restaurant. Café. Traiteur.</p>
        <div className="w-full flex justify-center mt-[200px]">
                <a
                        href="https://linktr.ee/lesgrilladesducedres"
                        target="_blank"
                        className="bg-red-600 rounded-xl px-5" rel="noreferrer"
                        >
                        <p className="text-white text-[40px] w-fit text-center">COMMANDER MAINTENANT!</p>
                </a>
        </div>
    </div>
)

const Story = () => (
    <div className="">
        <p className="italic text-[30px] md:text-[70px] font-bold font-serif">Notre Histoire...</p>
        <div className="flex-col my-10">
            <img src={h1} alt="h1" />
            <img src={h2} alt="h2" />
            <img src={h3} alt="h3" />
            <img src={h4} alt="h4" />
        </div>
    </div>
)

const Sellers = () => (
    <div className="">
        <p className="italic text-[30px] md:text-[70px] font-bold font-serif">Meilleurs Vendeurs...</p>
        <div className="flex flex-col md:flex-row flex-wrap gap-[20px] justify-center items-center my-10">
            <div className="text-center">
                <img className="w-[400px] rounded-full" src={aShishTaouk} alt="Shish Taouk" />
                <p className="italic text-[30px] font-bold">Shish Taouk</p>
            </div>
    
            <div className="text-center">
                <img className="w-[400px] rounded-full" src={aShawarma} alt="Shawarma" />
                <p className="italic text-[30px] font-bold">Shawarma</p>
            </div>
        </div>
    </div>
)

const HomeFR = () => {
    const HeroSection = SectionWrapper(Hero, "hero");
    const StorySection = SectionWrapper(Story, "story");
    const SellerSection = SectionWrapper(Sellers, "sellers");

    return (
        <div className="flex-grow bg-[#161616]">
            <HeroSection />
            <StorySection />
            <SellerSection />
            <div className="w-full flex justify-center">
                <a
                        href="https://linktr.ee/lesgrilladesducedres"
                        target="_blank"
                        className="bg-red-600 rounded-xl px-5" rel="noreferrer"
                        >
                        <p className="text-white text-[50px] w-fit">COMMANDER MAINTENANT!</p>
                </a>
            </div>
        </div>
    );
}

export default HomeFR;