import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menu, setmenu] = useState(false);
  const openMenu = () => setmenu(!menu);
  const closeMenu = () => setmenu(false);

  return (
    <div className="header">
      <div className="header__logo">Logo</div>
      <div className="header__nav">
        <div className="header__hamburger" onClick={openMenu}>
          {menu ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </div>
        <ul className={menu ? "header__links--active" : "header__links"}>
          <li className="header__link">
            <Link
              to="banner"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              ACCUEIL
            </Link>
          </li>
          <li className="header__link">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              À PROPOS
            </Link>
          </li>
          <li className="header__link">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              PROJETS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
