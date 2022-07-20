import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [menu, setmenu] = useState(false);
  const openMenu = () => setmenu(!menu);
  const closeMenu = () => setmenu(false);

  return (
    <div className="flex justify-between items-center h-24 fixed bg-white w-full top-0 left-0 z-20 shadow-zinc-300 shadow-sm">
      <div className="text-3xl font-black pl-2">Logo</div>

      <ul className="hidden md:flex text-xl pr-3">
        <li className="pr-1.5">
          <Link
            activeClass="text-cyan"
            to="header"
            spy={true}
            smooth={true}
            offset={-96}
            duration={1000}
            onClick={closeMenu}
          >
            ACCUEIL
          </Link>
        </li>
        <li className="pr-1.5">
          <Link
            activeClass="text-cyan"
            to="services"
            spy={true}
            smooth={true}
            offset={-96}
            duration={1000}
            onClick={closeMenu}
          >
            SERVICES
          </Link>
        </li>
        <li className="pr-1.5">
          <Link
            activeClass="text-cyan"
            to="about"
            spy={true}
            smooth={true}
            offset={-96}
            duration={1000}
            onClick={closeMenu}
          >
            À PROPOS
          </Link>
        </li>

        <li className="pr-1.5">
          <Link
            activeClass="text-cyan"
            to="projects"
            spy={true}
            smooth={true}
            offset={-96}
            duration={1000}
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
        <li className="p-2 pt-0 border-zinc-300 border-b-2">
          <Link
            activeClass="text-cyan"
            to="header"
            spy={true}
            smooth={true}
            offset={-96}
            duration={1000}
            onClick={closeMenu}
          >
            ACCUEIL
          </Link>
        </li>
        <li className="p-2 pt-0 border-zinc-300 border-b-2">
          <Link
            activeClass="text-cyan"
            to="services"
            spy={true}
            smooth={true}
            offset={-95}
            duration={1000}
            onClick={closeMenu}
          >
            SERVICES
          </Link>
        </li>

        <li className="p-2 border-zinc-300 border-b-2 ">
          <Link
            activeClass="text-cyan"
            to="about"
            spy={true}
            smooth={true}
            offset={-95}
            duration={1000}
            onClick={closeMenu}
          >
            À PROPOS
          </Link>
        </li>

        <li className="p-2 border-zinc-300 border-b-2">
          <Link
            activeClass="text-cyan"
            to="projects"
            spy={true}
            smooth={true}
            offset={-95}
            duration={1000}
            onClick={closeMenu}
          >
            PROJETS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
