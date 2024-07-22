import { createContext, useState } from "react";

const AppContext = createContext();

function ContextWrapper({ children }) {
  const [productsInCart, SetProductsInCart] = useState([]);
  const [discount, setDiscount] = useState(false);
  function addToCart(product) {
    SetProductsInCart((prev) => {
      const isProductInCart = prev.some((item) => item.id === product.id);
      if (isProductInCart) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [
          ...prev,
          {
            ...product,
            stock: product.stock - 1,
            quantity: 1,
          },
        ];
      }
    });
  }

  const increment = (product) => {
    const newProducts = productsInCart.map((value) => {
      const matching = value.id === product.id;
      if (!matching) {
        return value;
      } else {
        if (value.stock > 0) {
          return {
            ...value,
            quantity: value.quantity + 1,
            stock: value.stock - 1,
          };
        } else {
          return value;
        }
      }
    });
    SetProductsInCart(newProducts);
  };
  const decrement = (product) => {
    const newProducts = productsInCart.map((value) => {
      const matching = value.id === product.id;
      if (!matching) {
        return value;
      } else {
        if (value.quantity > 0) {
          return {
            ...value,
            quantity: value.quantity - 1,
            stock: value.stock + 1,
          };
        } else if (value.quantity === 0) {
        }
      }
    });
    SetProductsInCart(newProducts);
  };
  const values = {
    productsInCart,
    SetProductsInCart,
    addToCart,
    discount,
    setDiscount,
    increment,
    decrement,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { ContextWrapper, AppContext };
