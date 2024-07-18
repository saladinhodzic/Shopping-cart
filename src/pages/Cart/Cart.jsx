import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CartCard from "../../components/CartCard/CartCard";
export default function Cart() {
  const { productsInCart } = useContext(AppContext);
  return (
    <div className="wrapper-cart">
      {productsInCart.map((product) => {
        return (
          <CartCard
            image={product.image_url}
            title={product.title}
            stock={product.stock}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
