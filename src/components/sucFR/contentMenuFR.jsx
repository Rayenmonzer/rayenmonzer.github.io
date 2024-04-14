import React from "react";
import { itemsFR } from "../../assets/constant/data_fr";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import MenuNavFR from "../sucFR/menuNavFR";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

  const Article = ({index,img,title,description}) => 
  (
    <div>
        <div className='w-full h-full rounded-[20px] border border-grey shadow-lg'>
        <div options={{max: 45,scale: 1,speed: 450}} className=' rounded-[20px] w-[200px] overflow-hidden h-fit flex items-center flex-col'>
            <img src={img} alt={title} className='w-50 h-50 object-contain'/>
            <p className='text-black text-[20px] font-bold text-center'>
            {title}
            </p>
            <div className="flex flex-grow h-fit items-center p-2">
              <p className='text-[#606060] text-[15px] w-full font-light text-center'>
                {description}
              </p>
            </div>
        </div>
        </div>
    </div>
  )

  const Category = ({index, id, title, articles}) =>
  (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 2)} className="w-full my-[50px]">
        <span id={id} className="text-[40px] pt-[50px] text-black font-light">{title}</span>
        {/*LINE DISPLAYED*/}
        <div className='h-[1px] w-full my-[10px] bg-black' />
        <div className="flex flex-wrap gap-[50px] mt-10 sm:justify-start justify-center">
            {articles.map((article, index) => (
                <Article key={article.title} index={index}  {...article}/>
            ))}
        </div>
        {title === "Petit-déjeuner" && (
        <div className="text-black flex gap-2 my-5">
          <p>*</p>
          <FontAwesomeIcon icon={faUtensils} />
          <p>Option de trio disponible: Café 12 oz avec patates ou biscuits</p>
        </div>
      )}
    </motion.div>
  )


  const ContentMenu = () =>
  {
    return(   
    <>
      <MenuNavFR/>
        {itemsFR.map((item, index) => (
        <Category key={item.title} index={index}  {...item}/>
        ))}
    </>
    );
  }

  export default SectionWrapper(ContentMenu,"menu");