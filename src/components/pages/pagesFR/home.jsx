import React from "react";
import { SectionWrapper } from "../../../hoc";
import { logo } from "../../../assets/img/img";

const Hero = () => (
    <div className="flex justify-center sm:h-[70vh] h-[80vh] items-center">
        <img className="w-fit h-fit" src={logo} alt="logo"/>
    </div>
)

const Story = () => (
    <div className="">
        <p className="italic text-[40px] font-serif">Notre Histoire...</p>
    </div>
)

const Sellers = () => (
    <div className="">
        <p className="italic text-[40px] font-serif">Meilleurs Vendeurs...</p>
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
        </div>
    );
}

export default HomeFR;