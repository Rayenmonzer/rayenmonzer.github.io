import React from "react";
// Import necessary FontAwesome libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => 
{
 
    return(
        <footer className="flex bg-[#161616] p-5 justify-center">
            <div className="flex w-fit gap-[10px] items-center">
                <p className="h-fit">Les Grillades Du Cèdre</p>
                <a
                    href="https://www.instagram.com/grilladesducedre/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                href="https://www.facebook.com/profile.php?id=100089957802500&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;