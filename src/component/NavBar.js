import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import logoEnASoft from "../assets/logo_EnaSoft-removebg.png";

const NavBar = () => {
  const [menu, setmenu] = useState(false);
  const openMenu = () => setmenu(!menu);
  const closeMenu = () => setmenu(false);

  return (
    <div className="flex justify-between items-center h-24 fixed bg-white w-full top-0 left-0 z-50 shadow-zinc-300 shadow-sm">
      <img
        src={logoEnASoft}
        width="762"
        height="327"
        alt="EnA Soft logo"
        className="w-48 h-auto"
      />

      <ul className="hidden md:flex text-xl pr-3">
        <li className="pr-1.5">
          <Link
            activeClass="text-secondaryBlue"
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
            activeClass="text-secondaryBlue"
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
            activeClass="text-secondaryBlue"
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
            activeClass="text-secondaryBlue"
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
        <li className="pr-1.5">
          <Link
            activeClass="text-secondaryBlue"
            to="contact"
            spy={true}
            smooth={true}
            offset={-96}
            duration={1000}
            onClick={closeMenu}
          >
            CONTACT
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
            activeClass="text-secondaryBlue"
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
            activeClass="text-secondaryBlue"
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
            activeClass="text-secondaryBlue"
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
            activeClass="text-secondaryBlue"
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
        <li className="p-2 border-zinc-300 border-b-2">
          <Link
            activeClass="text-secondaryBlue"
            to="contact"
            spy={true}
            smooth={true}
            offset={-95}
            duration={1000}
            onClick={closeMenu}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
