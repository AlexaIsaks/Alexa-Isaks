import Navigation from "./Navigation";
import LogoHeader from "../../assets/images/brand/logo-header.svg";
import Burger from "../../assets/images/icons/burger-icon.svg";
import Close from "../../assets/images/icons/close-icon.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Site header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Opens mobile site menu
  const handleOpenMenu = () => {
    setIsMenuOpen(true);

    const body = document.querySelector(".body");
    body.classList.add("body--stop-scroll");
  };

  // Closes mobile site menu
  const handleCloseMenu = () => {
    setIsMenuOpen(false);

    const body = document.querySelector(".body");
    body.classList.remove("body--stop-scroll");
  };

  return (
    <header className="site-header site__header">
      {/*Brand logo */}
      <NavLink to="/">
        <img src={LogoHeader} alt="Brand Logo" className="site-header__logo" />
      </NavLink>

      {/*Site navigation */}
      <div className="site-header__navigation-container">
        {/*Menu icons*/}
        <div className="site-header__icons-container">
          <img
            src={Burger}
            alt="Menu button"
            className={`site-header__burger-icon ${
              isMenuOpen ? "site-header__burger-icon--hide" : ""
            }`}
            onClick={handleOpenMenu}
          />
          <img
            src={Close}
            alt="Close menu button"
            className={`site-header__close-icon ${
              isMenuOpen ? "" : "site-header__close-icon--hide"
            }`}
            onClick={handleCloseMenu}
          />
        </div>

        {/*Navigation draw*/}
        <Navigation isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} />
      </div>
    </header>
  );
};

export default Header;
