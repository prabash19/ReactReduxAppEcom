import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="Navbar">
      <div>
        <Link to="/" className="Navbar-link">
          HOME{" "}
        </Link>
      </div>
      <div>
        <Link to="/cart" className="Navbar-link">
          CART
        </Link>
      </div>
      <div className="Navbar-link">CART ITEMS: {items.length}</div>
    </div>
  );
};

export default Navbar;
