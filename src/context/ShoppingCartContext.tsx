import { Dispatch, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useActualWidth } from "../hooks/useActualWidth";
import Menu from "../components/Menu";
import { useScrollPosition } from "../hooks/useScrollPosition";

type ShoppingCartProps = {
  children: JSX.Element | JSX.Element[];
};

type CartItemProps = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  openCloseMenu: () => void;
  openSnackBar: () => void;
  closeSnackBar: () => void;
  scrollPosition: number;
  setScrollPosition: Dispatch<React.SetStateAction<number>>;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItemProps[];
  isCartOpen: boolean;
  width: number;
  isMenuOpen: boolean;
  setCartItems: Dispatch<React.SetStateAction<CartItemProps[]>>;
  setIsMenuOpen: Dispatch<React.SetStateAction<boolean>>;
  openSnack: boolean;
  setOpenSnack: Dispatch<React.SetStateAction<boolean>>;
  snackMessage: string;
  setSnackMessage: Dispatch<React.SetStateAction<string>>;
  snackSeverity: string;
  setSnackSeverity: Dispatch<React.SetStateAction<string>>;
};

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItemProps[]>(
    "cart-items",
    []
  );
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("");
  const width = useActualWidth();
  const { scrollPosition, setScrollPosition } = useScrollPosition();

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id: number) => {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id: number) => {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id)?.quantity === 1) {
        return currentItems.filter(item => item.id !== id);
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems(currentItems => {
      return currentItems.filter(item => item.id !== id);
    });
  };

  const openCloseMenu = () => {
    closeCart();
    setIsMenuOpen(!isMenuOpen);
  };

  const openSnackBar = () => {
    setOpenSnack(true);
  };

  const closeSnackBar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        isCartOpen,
        setCartItems,
        openCloseMenu,
        width,
        isMenuOpen,
        scrollPosition,
        setScrollPosition,
        setIsMenuOpen,
        openSnack,
        setOpenSnack,
        openSnackBar,
        closeSnackBar,
        snackMessage,
        setSnackMessage,
        snackSeverity,
        setSnackSeverity,
      }}>
      {children}
      {isCartOpen && <ShoppingCart />}
      {isMenuOpen && <Menu />}
    </ShoppingCartContext.Provider>
  );
};
