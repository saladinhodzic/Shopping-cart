import { useState } from "react";
import productsJSON from "../../common/products.json";
import { useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState(productsJSON);
  useEffect(() => {
    setProducts(
      products.map((product, index) => {
        product.id = index + 1;
        product.stock = Math.floor(Math.random() * 50);
      })
    );
  }, []);
  console.log(products);
  return;
}
