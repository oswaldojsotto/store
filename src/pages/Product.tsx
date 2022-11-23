import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CurrencyFormatter } from "../utilities/CurrencyFormatter";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Rating from "@mui/material/Rating";
import SnackBar from "../components/SnackBar";

const Product = () => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    setSnackSeverity,
    setSnackMessage,
    setOpenSnack,
  } = useShoppingCart();
  let { ProductId } = useParams();

  const { data: item, status } = useQuery([`itemDetails`], () => {
    return fetch(`https://fakestoreapi.com/products/${ProductId}`).then(data =>
      data.json()
    );
  });
  const addItemToCartActions = (id: number) => {
    increaseCartQuantity(id);
    setSnackSeverity("success");
    setSnackMessage("Item has been added to the cart");
    setOpenSnack(true);
  };

  const removeItemFromCartAction = (id: number) => {
    removeFromCart(id);
    setSnackSeverity("error");
    setSnackMessage("Item has been removed from cart");
    setOpenSnack(true);
  };

  const decreaseValidation = (id: number) => {
    quantity !== 1 ? decreaseCartQuantity(id) : removeItemFromCartAction(id);
  };

  const quantity = getItemQuantity(item?.id);

  return (
    <>
      <SnackBar />

      {status === "loading" && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      {status === "success" && (
        <div className="product-main-container">
          <div
            className="product-image"
            style={{ backgroundImage: `url(${item?.image})` }}></div>
          <div className="product-info">
            <div className="productname-container">
              <h2>
                {item?.title} <br />
                <span className="product-category">
                  {" "}
                  {item?.category.toUpperCase()}
                </span>
              </h2>
            </div>
            <div className="productprice-container">
              <h1>
                {/* <span className="price-discount">-{CURRENT_DISCOUNT}% </span> */}
                {CurrencyFormatter(item?.price)}
              </h1>
            </div>
            <div className="product-rating-container">
              <Rating
                style={{ color: "#DAA520" }}
                value={item?.rating.rate}
                size="medium"
                precision={0.1}
                readOnly
              />{" "}
              <span className="product-rating-count">
                {"    "}
                {item?.rating.count} ratings
              </span>
            </div>
            <div className="productdescription-container">
              <p className="product-description"> {item?.description}</p>
            </div>
            {quantity !== 0 ? (
              <div className="product-already-in-cart">
                <p className="already-in-cart-text"> item(s) already in cart</p>
              </div>
            ) : (
              <div className="product-already-in-cart"></div>
            )}
            <div className="productbutton-container">
              {quantity === 0 ? (
                <button
                  className="product-button-add"
                  onClick={() => addItemToCartActions(item?.id)}>
                  {" "}
                  Add to cart
                </button>
              ) : (
                <div className="product-two-buttons-container">
                  <button
                    className="product-button-remove"
                    onClick={() => removeItemFromCartAction(item?.id)}>
                    {" "}
                    Remove from cart
                  </button>
                  <div className="product-counter-container">
                    <button
                      className="product-counter-minus"
                      onClick={() => decreaseValidation(item?.id)}>
                      <span className="product-counter-sign">-</span>
                    </button>
                    <div className="product-counter">{quantity}</div>
                    <button
                      className="product-counter-plus"
                      onClick={() => increaseCartQuantity(item?.id)}>
                      <span className="product-counter-sign">+</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
