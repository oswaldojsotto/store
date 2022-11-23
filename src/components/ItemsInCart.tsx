import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { CurrencyFormatter } from "../utilities/CurrencyFormatter";

type ItemsInCartProps = {
  id: number;
  quantity: number;
};

export default function ItemsInCart({ id, quantity }: ItemsInCartProps) {
  const { removeFromCart } = useShoppingCart();
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .catch(error => {
        console.log(error);
      })
      .then(data => {
        setProductName(data.title);
        setProductPrice(data.price);
        setProductImage(data.image);
      });
  }, []);

  return (
    <>
      <div className="itemsincart-main">
        <div
          className="itemsincart-photo-container"
          style={{
            backgroundImage: `url(${productImage})`,
          }}></div>
        <div className="itemsincart-details">
          <p className="itemsincart-name">{productName}</p>
          <p className="itemsincart-price">
            {quantity} x {CurrencyFormatter(productPrice)} each.
          </p>
        </div>
        <p className="itemsincart-total">
          {CurrencyFormatter(productPrice * quantity)}
        </p>
        <DisabledByDefaultIcon
          className="itemsincart-removeicon"
          onClick={() => removeFromCart(id)}
        />
      </div>
    </>
  );
}
