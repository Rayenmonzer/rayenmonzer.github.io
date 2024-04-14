import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinksFR } from "../../assets/constant/data_fr";
import { navLinksEN } from "../../assets/constant/data_en";
import { close, menu,logo } from "../../assets/img/img";

const NavBar = () => {
    // Retrieve the initial language from localStorage or default to "FR"
    const initialLang = localStorage.getItem("lang") || "FR";
    const navigate = useNavigate();
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lang, setLang] = useState(initialLang);
    const nav = lang === "FR" ? navLinksFR : navLinksEN;
  
    useEffect(() => {
      // Save the current language to localStorage
      localStorage.setItem("lang", lang);
      var pathWithoutLang = window.location.pathname.replace(/\/(en|fr)/, '');
      if(pathWithoutLang === "/"){pathWithoutLang = "/home"}
      const newUrl = lang === "FR" ? `${pathWithoutLang}` : `${pathWithoutLang}/en`;
      window.history.pushState({}, '', newUrl);
      navigate(newUrl);
      window.scrollTo(0, 0);
    }, [lang]);
  
    const toggleLanguage = () => {
      setLang((prevLang) => (prevLang === "FR" ? "EN" : "FR"));
      handleNavLinkClick();
    };

    const handleNavLinkClick = () => {
      // Close the mobile menu when a navigation link is clicked
      setToggle(false);
    };
  
    return (
      <nav className="flex w-full h-[75px] bg-white sticky top-0 border-b z-20 border-black text-black text-[21px]">
        <div className="flex w-full">
          <Link to={`/home${lang === "EN" ? "/en" : ""}`} className="flex items-center sm:ml-12 ml-5">
            <img className="w-[95%] h-[80%]" src={logo} alt="logo"/>
          </Link>
          {/*OPTIONS ON NAVBAR LARGE SCREEN*/}
          <div className="lg:flex hidden ml-auto h-full">
            <div className="flex flex-row h-full items-center">
              {nav.map((nav) => (
                <div
                  key={nav.id}
                  className={`flex items-center h-full w-[125px]`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link
                    to={`${nav.id}${lang === "EN" ? "/en" : ""}`}
                    className="flex hover:bg-green-600 hover:text-white h-full w-full justify-center items-center "
                    href={`/${nav.id}`}
                  >
                    <p className="w-fit h-fit ">{nav.title}</p>
                  </Link>
                </div>
              ))}
              <p
                className="flex h-full cursor-pointer text-black items-center px-[10px] hover:bg-[#DC2626] underline hover:text-white hover:no-underline"
                onClick={toggleLanguage}
              >
                {lang === "FR" ? "Anglais" : "French"}
              </p>
            </div>
            <a
              href="https://linktr.ee/lesgrilladesducedres"
              target="_blank"
              className="flex w-[200px] justify-center items-center bg-red-600" rel="noreferrer"
            >
              <p className="text-white">
                {lang === "FR" ? "COMMANDER" : "ORDER"}
              </p>
            </a>
          </div>
  
          {/*OPTIONS ON NAVBAR SMALL SCREEN*/}
          <div className="lg:hidden flex flex-1 justify-end items-center mr-10 ">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
  
            <div
              className={`${!toggle ? "hidden" : "flex"} p-6 absolute bg-white top-[75px] border-b border-black right-0 mx-0 w-full z-10 text-black`}
            >
              <ul className="grid w-full gap-[30px]">
                {nav.map((nav) => (
                  <li
                    key={nav.id}
                    className={`flex justify-center`}
                    onClick={() => {setActive(nav.title); handleNavLinkClick();}}
                  >
                    <Link to={`${nav.id}${lang === "EN" ? "/en" : ""}`}>{nav.title}</Link>
                  </li>
                ))}
                <li className="w-full flex justify-center">
                  <p className="w-fit underline" onClick={toggleLanguage}>
                    {lang === "FR" ? "Anglais" : "French"}
                  </p>
                </li>
                <li className="w-full flex justify-center bg-red-600 rounded-xl">
                    <a
                    href="https://linktr.ee/lesgrilladesducedres"
                    target="_blank"
                    className="flex w-[200px] justify-center items-center" rel="noreferrer"
                    >
                    <p className="text-white">
                      {lang === "FR" ? "COMMANDER" : "ORDER"}
                    </p>
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;