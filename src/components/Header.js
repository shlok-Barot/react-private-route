import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="nav-header">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactus" className="nav-link">
            ContactUs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={() => handleLogout()}>
            LogOut
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
