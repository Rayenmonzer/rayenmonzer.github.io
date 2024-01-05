import React from "react";
import { cateringFR } from "../../assets/constant/data_fr";
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
        <span className="text-[40px] text-black font-light">Traiteur</span>
        {/*LINE DISPLAYED*/}
        <div className='h-[1px] w-full bg-black' />
        <div className="flex flex-wrap gap-[30px] mt-10 lg:justify-start justify-center">
            {cateringFR.map((article, index) => (
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
                L'édifice Louis-Charland et les édifices voisins ne sont pas considérés 
                comme des commandes "extérieurs", ce qui exclus les frais de livraison. 
                Le client est responsable de ramener les thermos et plateaus pour les commandes intérieurs.
                Les commandes extérieurs de moins de 150$ serons refusées. Tous les commandes doivent etre 
                avisées 24 heures à l'avance.Toute les commandes vont être confirmées avec un email. Si vous 
                ne reçevez pas de email de confirmation, veuillez appeler le restaurant ou envoyer un nouveau 
                message électronique.
            </p>
        </div>
    </motion.div>
)


const ContentOrderFR = () => 
{
    SectionWrapper(Content,"order");

    return(
        <div>
            <Content />
            <Disclaimer/>
        </div>
    );
}

export default SectionWrapper(ContentOrderFR,"order");