import React from "react";
import { SectionWrapper } from "../../../hoc";
import { logo,h5,h6,h7,h8 } from "../../../assets/img/img";
import { aShishTaouk,aShawarma } from "../../../assets/img/img";

const Hero = () => (
    <div className="flex flex-col justify-center sm:h-[70vh] h-[80vh] items-center">
        <img className="w-fit h-fit" src={logo} alt="logo"/>
        <p className="text-[30px] font-light">Restaurant. Coffee Shop. Caterer.</p>
    </div>
)

const Story = () => (
    <div className="">
        <p className="italic text-[30px] md:text-[70px] font-bold font-serif">Our Story...</p>
        <div className="flex-col my-10">
            <img src={h5} alt="h5" />
            <img src={h6} alt="h6" />
            <img src={h7} alt="h7" />
            <img src={h8} alt="h8" />
        </div>
    </div>
)

const Sellers = () => (
    <div className="">
        <p className="italic text-[30px] md:text-[70px] font-bold font-serif">Our Best Sellers...</p>
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

const HomeEN = () => {
    const HeroSection = SectionWrapper(Hero, "hero");
    const StorySection = SectionWrapper(Story, "story");
    const SellerSection = SectionWrapper(Sellers, "sellers");

    return (
        <div className="flex-grow bg-[#161616]">
            <HeroSection />
            <StorySection />
            <SellerSection />
        </div>
    );
}

export default HomeEN;