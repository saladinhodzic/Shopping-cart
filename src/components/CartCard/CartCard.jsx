import "./CartCard.css";
export default function CartCard({
  image,
  title,
  description,
  stock,
  price,
  onClick,
  quantity,
  incrementProduct,
  decrementProduct,
}) {
  return (
    <div className="product-cart">
      <img className="product-image" src={image} />
      <div className="product-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="quantity">
        <p>Quantity:{quantity}</p>
        <button onClick={incrementProduct}>+</button>
        <button onClick={decrementProduct}>-</button>
      </div>
      <div className="product-price">
        <h2>{price}</h2>
        <p>In stock: {stock}</p>
      </div>
      <button onClick={onClick} className="remove-button">
        Remove from cart
      </button>
    </div>
  );
}
