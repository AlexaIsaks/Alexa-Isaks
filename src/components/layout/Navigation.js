import { NavLink, useLocation } from "react-router-dom";

// Site navigation
const Navigation = ({isMenuOpen, handleCloseMenu}) => {
  const { pathname } = useLocation();

  return ( 
    <>
     {/*Navigation draw*/}
    <div className={`site-header__navigation-draw ${isMenuOpen ? "site-header__navigation-draw--open" : ""} site-navigatiion`}>
          <nav className="site-navigation__nav">
            <ul className="site-navigation__list">
              <li
                className={`site-navigation__item ${
                  pathname === "/about" ? "site-navigation__item--active" : ""
                }`}
              >
                <NavLink to="/about" className="site-navigation__link" onClick={handleCloseMenu} >
                  About
                </NavLink>
              </li>
              <li
                className={`site-navigation__item site-navigation__item--center ${
                  pathname === "/portfolio"
                    ? "site-navigation__item--active"
                    : ""
                }`}
              >
                <NavLink to="/portfolio" className="site-navigation__link" onClick={handleCloseMenu}>
                  Portfolio
                </NavLink>
              </li>
              <li
                className={`site-navigation__item ${
                  pathname === "/contact" ? "site-navigation__item--active" : ""
                }`}
              >
                <NavLink to="/contact" className="site-navigation__link" onClick={handleCloseMenu}>
                  Contact
                </NavLink>
              </li>
              <li className="site-navigation__item"></li>
            </ul>
          </nav>
          <div className="site-navigaton__column"></div>
        </div>
    </>
   );
}
 
export default Navigation;