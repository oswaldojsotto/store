import React, { useState, useRef } from "react";
import ItemCard from "../components/ItemCard";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useQuery } from "@tanstack/react-query";
import SnackBar from "../components/SnackBar";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import wave2 from "/public/wave2.svg";

const Store = () => {
  const [search, setSearch] = useState("");
  const { closeCart, isCartOpen } = useShoppingCart();

  const { data, status } = useQuery(["productsItems"], async () => {
    return await fetch("https://fakestoreapi.com/products").then(res =>
      res.json()
    );
  });

  const handleCloseCart = () => {
    if (isCartOpen) {
      closeCart();
    }
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredItems = data?.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <>
      <SnackBar />
      {status === "error" && <p>Theres has been an error</p>}
      {status === "loading" && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      {status === "success" && (
        <>
          <div className="store-search-container">
            <input
              type="text"
              placeholder="Search for something..."
              name="search"
              className="searchbox"
              value={search}
              onChange={changeInput}
              autoComplete={"false"}
            />
            <div className="search-icons-container">
              {!search ? (
                <SearchIcon className="store-searchbar-icon" />
              ) : (
                <ClearIcon onClick={clearSearch} className="store-clear-icon" />
              )}
            </div>
          </div>
          <div className="wave2-store-container">
            <img src={wave2} />
          </div>
          <div className="store-container" onClick={handleCloseCart}>
            {filteredItems.length === 0 ? (
              <>
                <div className="search-results-empty">
                  <h2 className="empty-result">
                    No items with the name{" "}
                    <span className="item-name">{search}</span> were found.
                  </h2>
                </div>
              </>
            ) : (
              <>
                {filteredItems.map(
                  (
                    item: JSX.IntrinsicAttributes & {
                      id: number;
                      title: string;
                      image: string;
                      rating: { rate: number };
                      price: number;
                      lowsrc: string;
                    }
                  ) => {
                    return <ItemCard key={item.id} {...item} />;
                  }
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Store;
