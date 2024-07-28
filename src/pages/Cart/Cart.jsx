import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import CartCard from "../../components/CartCard/CartCard";
import shopPhoto from "../../assets/shop.jpg";
import "./Cart.css";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
export default function Cart() {
  const { productsInCart, addToCart, increment, decrement } =
    useContext(AppContext);
  const [open, setOpen] = useState(false);
  console.log(open);
  const totalPrice = productsInCart.reduce((acc, product) => {
    let newPrice;
    if (product.discountPrice) {
      newPrice = product.discountPrice * 1000;
    } else {
      const firstIndexOfComma = product.current_price.indexOf(",");
      const price =
        Number(product.current_price.slice(0, firstIndexOfComma)) * 1000;
      newPrice = price;
    }
    return acc + newPrice;
  }, 0);

  const removeProduct = () => {
    productsInCart.find((value) => {
      addToCart(value);
      setOpen(!open);
    });
  };

  return (
    <div className="wrapper-page">
      {productsInCart.length < 1 ? (
        <div className="error">
          <img className="error-img" src={shopPhoto} />
          <h2>No items in cart</h2>
          <p>
            Start browsing <Link to="/products">products</Link>
          </p>
        </div>
      ) : (
        <div className="wrapper-cart">
          <h1>My Cart</h1>
          {productsInCart.map((product) => {
            return (
              <CartCard
                image={product.image_url}
                title={product.title}
                stock={product.stock}
                price={
                  product.discountPrice
                    ? product.discountPrice
                    : product.current_price
                }
                description={product.short_description}
                onClick={() => {
                  setOpen(!open);
                }}
                quantity={product.quantity}
                incrementProduct={() => increment(product)}
                decrementProduct={() => decrement(product)}
              />
            );
          })}
          <h1>Total amount:{totalPrice / 1000}</h1>
        </div>
      )}
      {open && (
        <Modal
          confirm={() => removeProduct(product)}
          reject={() => setOpen(!open)}
        />
      )}
    </div>
  );
}
