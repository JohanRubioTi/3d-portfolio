import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import i18n from '../i18n';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
const Navbar = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdown(!dropdown)
  }

  const showDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            {t("title1", { ns: "navbar" })} &nbsp;
            <span className='sm:block hidden'>
              {t("title2", { ns: "navbar" })}
            </span>

          </p>
        </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {t("items", {ns: "navbar", returnObjects: true}).map((Link) => (
          <li
            key={Link.id}
            className={`${ active === Link.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {setToggle(!toggle); setActive(Link.title);}}
          >
              <a href={`#${Link.id}`}>{Link.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${ active === Link.title ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {setActive(Link.title); setToggle(!toggle);}}
              >
                  <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
          </ul>
        </div>
       </div>
       <div className={`py-2 px-4 relative border-1 border border-white flex justify-center items-center ${ dropdown ?" rounded-t-xl ":"rounded-xl"} transition-all ease-in-out duration-500`}>
            <button onClick={() => showDropdown()} className={ `${i18n.language === 'es' ?  "flex": "hidden"}`}>es</button>
            <button onClick={() => showDropdown()} className={ `${i18n.language === 'en' ?  "flex": "hidden"}`}>en</button>
          <div className={`${dropdown ? "flex translate-y-1":"-translate-y-[600px]"} absolute flex flex-col border border-1 border-red mt-28 px-4 py-2 justify-center items-center backdrop-blur-lg rounded-b-xl bg-white/30 transition-all ease-in-out duration-500`}>
            <button onClick={() => changeLanguage('es')}>es</button>
            <button onClick={() => changeLanguage('en')}>en</button>
          </div>
       </div>
      </div>
    </nav>
  )
}

export default Navbar
