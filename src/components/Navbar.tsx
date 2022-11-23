import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import logo from "/public/logo2.png";

import Marquee from "./Marquee";

const Navbar = () => {
  const {
    openCart,
    cartQuantity,
    openCloseMenu,
    width,
    isMenuOpen,
    scrollPosition,
    setIsMenuOpen,
  } = useShoppingCart();

  const openingCart = () => {
    openCart();
    setIsMenuOpen(false);
  };

  return (
    <>
      <Marquee />
      <div
        className={
          scrollPosition === 0 && isMenuOpen === false
            ? "navbar-container"
            : "navbar-container-active"
        }>
        <div className="nav-links">
          {width < 768 ? (
            <button
              onClick={openCloseMenu}
              className={
                isMenuOpen
                  ? "hamburger hamburger--collapse is-active"
                  : "hamburger hamburger--collapse"
              }
              type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          ) : (
            <>
              <NavLink
                end
                to="/"
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink-inactive"
                }>
                Home
              </NavLink>
              <NavLink
                end
                to="/store"
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink-inactive"
                }>
                Store
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink-inactive"
                }>
                About
              </NavLink>
            </>
          )}
        </div>
        <div className="main-logo">
          <img src={logo} className="-nav-logo"></img>
        </div>

        <div className="nav-cart-container">
          <div className="cart-icon-container" onClick={() => openingCart()}>
            <ShoppingCartIcon className="nav-cart-icon" />
            {/* <p className="cart-title">Cart</p> */}
            <p className="cart-counter">{cartQuantity}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
