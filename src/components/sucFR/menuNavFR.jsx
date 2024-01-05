import React, { useState, useEffect } from 'react';
import {menuNavFR} from "../../assets/constant/data_fr";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const MenuNavFR = () => 
{
    const [active, setActive] = useState("");

    return(
        <motion.div variants={fadeIn("up", "spring", 0.5, 2)} className={`flex flex-wrap sm:flex-row flex-col sm:gap-[50px] items-center justify-center w-full mb-[25px] Bb `}>
            {menuNavFR.map((nav)=>
            (
                <a key={nav.id} href={`#${nav.id}`} onClick = {() => setActive(nav.title)} className={`${active === nav.title ? 'underline' : ''} text-black p-5 w-fit text-[20px]`}>
                    {nav.title}
                </a>
            ))}
        </motion.div>
    );
}
export default MenuNavFR;