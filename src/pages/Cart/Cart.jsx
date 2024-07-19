import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CartCard from "../../components/CartCard/CartCard";
import "./Cart.css";
export default function Cart() {
  const { productsInCart } = useContext(AppContext);
  return (
    <div className="wrapper-page">
      <div className="wrapper-cart">
        <h1>My Cart</h1>
        {productsInCart.map((product) => {
          return (
            <CartCard
              image={product.image_url}
              title={product.title}
              stock={product.stock}
              price={product.current_price}
              description={product.short_description}
            />
          );
        })}
      </div>
    </div>
  );
}
