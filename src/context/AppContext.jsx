import { createContext, useState } from "react";

const AppContext = createContext();

function ContextWrapper({ children }) {
  const [productsInCart, SetProductsInCart] = useState([]);
  function addToCart(product) {
    SetProductsInCart((prev) => [
      ...prev,
      {
        ...product,
        stock: product.stock - 1,
      },
    ]);
  }
  const values = {
    productsInCart,
    SetProductsInCart,
    addToCart,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { ContextWrapper, AppContext };
