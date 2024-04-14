import React, { useState, useEffect } from 'react';
import {menuNavEN} from "../../assets/constant/data_en";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const MenuNavEN = () => 
{
    const [active, setActive] = useState("");

    return(
        <motion.div variants={fadeIn("up", "spring", 0.5, 2)} className={`flex flex-wrap sm:flex-row flex-col sm:gap-[50px] items-center justify-center w-full mb-[25px] Bb `}>
            {menuNavEN.map((nav)=>
            (
                <a key={nav.id} href={`#${nav.id}`} onClick = {() => setActive(nav.title)} className={`${active === nav.title ? 'underline' : ''} text-black p-5 w-fit text-[20px]`}>
                    {nav.title}
                </a>
            ))}
        </motion.div>
    );
}
export default MenuNavEN;