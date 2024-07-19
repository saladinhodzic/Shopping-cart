import "./CartCard.css";
export default function CartCard({ image, title, description, stock, price }) {
  return (
    <div className="product-cart">
      <img className="product-image" src={image} />
      <div className="product-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <h2>{price}</h2>
    </div>
  );
}
