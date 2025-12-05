import { Link, useLocation } from "react-router-dom";
import ShippingBox from "../../assets/icons/shippingBox.png";
import "./index.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <img
            src={ShippingBox}
            alt="Shipping Box"
            className="shipping-box-icon"
          />
          Shipping Box
        </h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link
              to="/"
              className={`navbar-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Add Box
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/list"
              className={`navbar-link ${
                location.pathname === "/list" ? "active" : ""
              }`}
            >
              Box List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
