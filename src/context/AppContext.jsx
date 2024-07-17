import { createContext, useState } from "react";

const AppContext = createContext();

function ContextWrapper({ children }) {
  const [productsInCart, SetProductsInCart] = useState([]);

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
          },
        ];
      }
    });
  }
  const values = {
    productsInCart,
    SetProductsInCart,
    addToCart,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { ContextWrapper, AppContext };
