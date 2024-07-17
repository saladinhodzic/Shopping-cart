import "./Header.css";
import logo from "../../assets/shopping-logo.svg";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
export default function Header() {
  const { productsInCart } = useContext(AppContext);
  return (
    <header>
      <div className="wrapper">
        <NavLink to="/" className="navlink-not-active">
          <div className="logo">
            <img src={logo} alt="" className="shopping-logo" />
            <h1>SAKILEY</h1>
          </div>
        </NavLink>
        <div className="listing">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-not-active"
            }
          >
            <li>Products</li>
          </NavLink>
          <NavLink
            to="/outlet"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-not-active"
            }
          >
            <li>Outlet</li>
          </NavLink>
          <NavLink to="/cart" className="navlink-not-active navlink-dot">
            <li className="shop">
              <FaShoppingCart className="icon" />
              {productsInCart.length === 0 ? null : (
                <div className="krug">{productsInCart.length}</div>
              )}
            </li>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
