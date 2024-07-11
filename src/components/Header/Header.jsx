import "./Header.css";
import logo from "../../assets/shopping-logo.svg";
import { FaShoppingCart } from "react-icons/fa";
export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="" className="shopping-logo" />
          <h1>SAKILEY</h1>
        </div>
        <div className="listing">
          <li>Products</li>
          <li>My Favourites</li>
          <li>
            <FaShoppingCart className="icon" />
          </li>
        </div>
      </div>
    </header>
  );
}
