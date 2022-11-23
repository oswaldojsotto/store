import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CloseIcon from "@mui/icons-material/Close";
import ItemsInCart from "./ItemsInCart";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { CurrencyFormatter } from "../utilities/CurrencyFormatter";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { closeCart, isCartOpen, cartItems, setCartItems } = useShoppingCart();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let cancelFetch = false;
    Promise.all(
      cartItems.map(item =>
        fetch(`https://fakestoreapi.com/products/${item.id}`)
          .then(res => res.json())
          .catch(error => {
            console.log(error);
          })
      )
    ).then(data => {
      if (!cancelFetch) {
        {
          const itemPrice = data.map(item => {
            return { price: item.price };
          });
          // merge : fusiona el array de items in cart con el array que contiene el precio
          const merge = cartItems.map((id, quant) => ({
            ...id,
            ...itemPrice[quant],
          }));

          const total = merge
            .map(item => item.quantity * item.price)
            .reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              0
            );
          setTotal(total);
        }
      }
    });
    setLoading(false);
    return () => {
      cancelFetch = true;
    };
  }, [cartItems]);

  return (
    <>
      {loading ? (
        <div>
          <h1>LOADING</h1>
        </div>
      ) : (
        <div
          className={
            isCartOpen ? "shoppingcart-main-open" : "shoppingcart-main-closed"
          }>
          <div className="top-bar">
            <h3 className="topbar-title">Your Cart</h3>
            <CloseIcon className="closebtn" onClick={closeCart} />
          </div>
          <div className="shoppingcart-items">
            {cartItems.map(item => {
              return <ItemsInCart key={item.id} {...item} />;
            })}
          </div>

          {cartItems.length === 0 ? (
            <div className="shoppingcart-empty">
              <h1>Your cart is empty!</h1>
              <p>Add your favorite items to your cart. </p>
              <div className="shoppingcart-empty-button" onClick={closeCart}>
                <Link to="/store" className="shoppingcart-button-text">
                  {" "}
                  Start Shopping{" "}
                </Link>
              </div>
            </div>
          ) : (
            <div className="shoppingcart-total">
              <div
                className="shoppingcart-clear-container"
                onClick={() => setCartItems([])}>
                <ClearAllIcon className="shoppingcart-clear-button" />
                <p className="shoppingcart-clear-text">Clear</p>
              </div>
              <p className="shoppingcartTotalTitleValue">
                Total: <span className="span">{CurrencyFormatter(total)}</span>
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
