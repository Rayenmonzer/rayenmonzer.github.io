import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import Map from "../genComp/map";
import { phone } from "../../assets/img/img";
import { mail } from "../../assets/img/img";

const Phone = () => 
(
  <div>
      <a href="tel:514-961-9622" target="_blank" className='w-fit p-2 rounded-[20px]'>
          <div options={{max: 45,scale: 1,speed: 450}} className=' rounded-[20px] hover:bg-[#ececec] p-5 flex items-center flex-col border border-grey shadow-lg'>
              <img src={phone} alt="phone" className='w-50 h-50 object-contain'/>
              <p className='text-black text-[20px] font-bold text-center'>
              514-961-9622
              </p>
          </div>
      </a>
  </div>
)

const Mail = () => 
(
  <div>
      <a target="_blank" href="mailto:smonzer@hotmail.com" className='w-fit p-2 rounded-[20px]'>
          <div options={{max: 45,scale: 1,speed: 450}} className=' rounded-[20px] hover:bg-[#ececec] p-5 flex items-center flex-col border border-grey shadow-lg'>
              <img src={mail} alt="phone" className='w-50 h-50 object-contain'/>
              <p className='text-black text-[20px] font-bold text-center'>
                  smonzer@hotmail.com
              </p>
          </div>
      </a>
  </div>
)

  const ContentContactFR = () =>
  {
    return(   
    <>
        <motion.div variants={fadeIn("up", "spring", 0.5, 2)} className="w-full">

            <span className="text-[40px] text-black font-light">Contact</span>
            {/*LINE DISPLAYED*/}
            <div className='h-[1px] w-full bg-black' />

            <div className="flex lg:flex-row flex-col md:justify-evenly md:mt-[100px] gap-[50px]">
                <div className="flex flex-col flex-wrap mt-10 gap-[50px] md:justify-evenly items-center">
                    <Mail/>
                    <Phone/>
                </div>
                <div className="flex justify-center">
                    <Map/>
                </div>
            </div>

            <div className="md:mt-[100px] my-5">
                <span className="text-[40px] text-black font-light">Horaire</span>
                {/*LINE DISPLAYED*/}
                <div className='h-[1px] w-full bg-black' />
                <div className="flex my-[100px] flex-col gap-[25px] text-black items-center md:text-[30px] text-[20px] font-light">
                    <p className="w-fit">Lundi-Vendredi : 6am-3pm</p>
                    <p className="w-fit">Samedi-Dimanche: Fermé</p>
                </div>
            </div>
        </motion.div>
    </>
    );
  }

  export default SectionWrapper(ContentContactFR,"contact");