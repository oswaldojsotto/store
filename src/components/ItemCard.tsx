import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CurrencyFormatter } from "../utilities/CurrencyFormatter";
import Rating from "@mui/material/Rating";
import loader from "/public/loader.svg";

type ItemCardProps = {
  id: number;
  title: string;
  image: string;
  rating: {
    rate: number;
  };
  price: number;
  lowsrc: string;
};

const ItemCard = ({ id, title, image, rating, price }: ItemCardProps) => {
  const [currentImg, setCurrentImg] = useState(loader);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    isCartOpen,
    setOpenSnack,
    setSnackMessage,
    setSnackSeverity,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

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

  return (
    <>
      <div className="item-container">
        <div className="item-card-container">
          <Link to={`/store/${id}`} className="itemcard-linkto">
            <img
              alt="image"
              src={currentImg}
              className="item-photo"
              loading="lazy"
              onLoad={() => setCurrentImg(image)}></img>

            <h5 className="itemcard-title">{title}</h5>
            <div className="star">
              <Rating
                style={{ color: "#DAA520" }}
                value={Math.round(rating.rate)}
                size="small"
                precision={1}
                readOnly
              />
            </div>
            <h5 className="itemcard-price">{CurrencyFormatter(price)}</h5>
          </Link>
        </div>
        {quantity === 0 ? (
          <button
            className="itemcard-add-button"
            onClick={() => addItemToCartActions(id)}>
            Add to cart
          </button>
        ) : (
          <div className="itemcard-buttons-container">
            <div className="itemcard-addremove-buttons">
              <button
                className="itemcard-minusplus-button"
                onClick={() => decreaseValidation(id)}>
                -
              </button>
              <p className="itemcard-itemscounter">
                {quantity} <span className="span">items in cart</span>
              </p>
              <button
                className="itemcard-minusplus-button"
                onClick={() => increaseCartQuantity(id)}>
                +
              </button>
            </div>
            <div className="itemcard-remove-container">
              <button
                className="itemcard-remove-button"
                onClick={() => removeItemFromCartAction(id)}>
                Remove item
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemCard;
