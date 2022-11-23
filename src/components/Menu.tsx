import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Menu = () => {
  const { openCloseMenu, scrollPosition, setScrollPosition } =
    useShoppingCart();

  const goHome = () => {
    setScrollPosition(1);
    openCloseMenu();
  };

  return (
    <div
      className={scrollPosition !== 0 ? "main-menu-top" : "main-menu-bottom"}>
      <NavLink
        end
        to="/"
        className={({ isActive }) =>
          isActive ? "menulink-active" : "menulink-inactive"
        }
        onClick={goHome}>
        Home
      </NavLink>
      <NavLink
        end
        to="/store"
        className={({ isActive }) =>
          isActive ? "menulink-active" : "menulink-inactive"
        }
        onClick={openCloseMenu}>
        Store
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "menulink-active" : "menulink-inactive"
        }
        onClick={openCloseMenu}>
        About
      </NavLink>
    </div>
  );
};

export default Menu;
