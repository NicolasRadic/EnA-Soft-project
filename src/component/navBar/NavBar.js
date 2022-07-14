import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menu, setmenu] = useState(false);
  const openMenu = () => setmenu(!menu);
  const closeMenu = () => setmenu(false);

  return (
    <div className="flex justify-between items-center h-24 fixed bg-white w-full top-0 left-0">
      <div className="text-3xl font-black pl-2">Logo</div>

      <ul className="hidden md:flex text-xl pr-3">
        <li className="header__link  pr-1.5">
          <Link
            activeClass="text-cyan"
            to="header"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            onClick={closeMenu}
          >
            ACCUEIL
          </Link>
        </li>
        <li className="header__link pr-1.5">
          <Link
            activeClass="text-cyan"
            to="about"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            onClick={closeMenu}
          >
            À PROPOS
          </Link>
        </li>
        <li className="header__link pr-1.5">
          <Link
            activeClass="text-cyan"
            to="projects"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            onClick={closeMenu}
          >
            PROJETS
          </Link>
        </li>
      </ul>

      <div className="pr-2 md:hidden " onClick={openMenu}>
        {menu ? (
          <FontAwesomeIcon icon={faXmark} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" />
        )}
      </div>
      <ul
        className={
          menu
            ? "w-screen h-fit p-4 fixed left-0 top-24 ease-in flex flex-col justify-center gap-1 flex-wrap bg-white text-xl pr-2 border-t-2 border-solid border-zinc-300 opacity-90 md:hidden"
            : "hidden"
        }
      >
        <li className="header__link  pr-1.5 p-2 border-zinc-300 border-b-2">
          <Link
            activeClass="text-cyan"
            to="header"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            onClick={closeMenu}
          >
            ACCUEIL
          </Link>
        </li>
        <li className="header__link pr-1.5 p-2 border-zinc-300 border-b-2 ">
          <Link
            activeClass="text-cyan"
            to="about"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            onClick={closeMenu}
          >
            À PROPOS
          </Link>
        </li>
        <li className="header__link pr-1.5 p-2 border-zinc-300 border-b-2">
          <Link
            activeClass="text-cyan"
            to="projects"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            onClick={closeMenu}
          >
            PROJETS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;