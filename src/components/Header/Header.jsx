import "./Header.css";
import logo from "../../assets/shopping-logo.svg";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" className="shopping-logo" />
      </div>
      <div className="listing"></div>
    </header>
  );
}
