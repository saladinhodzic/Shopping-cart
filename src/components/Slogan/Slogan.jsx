import "./Slogan.css";
import { Link } from "react-router-dom";
export default function Slogan() {
  return (
    <main>
      <div className="wrapper-slogan">
        <div className="content">
          <h1>Discover. Shop. Enjoy.</h1>
          <h2>
            See our {""}
            <Link className="link-active" to="/products">
              products
            </Link>
            .
          </h2>
        </div>
      </div>
    </main>
  );
}
