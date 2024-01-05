import React from "react";
import { SectionWrapper } from "../../../hoc";

const Hero = () => (
    <div className="">
        <p className="italic text-[40px] font-serif">Hero...</p>
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
        <div className="flex-grow h-screen bg-[#161616]">
            <HeroSection />
            <StorySection />
            <SellerSection />
        </div>
    );
}

export default HomeFR;