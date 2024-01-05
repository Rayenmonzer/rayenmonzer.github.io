import React from "react";
import { cateringEN } from "../../assets/constant/data_en";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const Article = ({index, id, img, title, description, price}) => 
(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 2)} className="lg:w-full w-[250px]">
      <div className='w-full rounded-[20px] border border-grey shadow-lg'>
        <div key={id} options={{max: 45,scale: 1,speed: 450}} className='flex rounded-[20px] w-full lg:flex-row flex-col items-center justify-center'>
            <div className='flex lg:w-[150px] lg:h-[120px] w-full rounded-xl overflow-hidden object-contain justify-center'>
                <img src={img} alt={title} className='w-full'/>
            </div>
            <div className="flex flex-col gap-[10px] lg:gap-0 text-center lg:h-[115px] lg:w-[400px] lg:text-start lg:px-[20px] py-[20px] px-3 items-center lg:items-start justify-center">
                <p className='text-black text-[20px] w-fit'>{title}</p>
                <p className="text-[#606060] text-[15px] lg:overflow-y-auto">{description}</p>
            </div>
            <p className='text-[#606060] lg:text-[20px] text-[15px] py-5 font-light text-center lg:ml-auto lg:mr-2'>{price}</p>
        </div>
      </div>
      </motion.div>
)

const Content = () => 
(
    <motion.div variants={fadeIn("up", "spring", 0.5, 5)} className="w-full">
        <span className="text-[40px] text-black font-light">Catering</span>
        {/*LINE DISPLAYED*/}
        <div className='h-[1px] w-full bg-black' />
        <div className="flex flex-wrap gap-[30px] mt-10 lg:justify-start justify-center">
            {cateringEN.map((article, index) => (
                <Article key={article.title} index={index}  {...article}/>
            ))}
        </div>
    </motion.div>
)

const Disclaimer = () => 
(
    <motion.div variants={fadeIn("up", "spring",0.5, 2)} className="w-full">
        <div className="w-full bg-red-700 p-12 my-[50px] rounded-xl text-center">
            <p className="text-white">
            The Louis-Charland building and neighboring buildings are not considered 
            "external orders," which excludes delivery fees. The customer is 
            responsible for returning thermoses and trays for indoor orders. 
            External orders under $150 will be declined. All orders must be 
            placed 24 hours in advance. Every order will be confirmed with an 
            email. If you do not receive a confirmation email, please call the 
            restaurant or send a new email.
            </p>
        </div>
    </motion.div>
)


const ContentOrderEN = () => 
{
    SectionWrapper(Content,"order");

    return(
        <div>
            <Content />
            <Disclaimer/>
        </div>
    );
}

export default SectionWrapper(ContentOrderEN,"order");