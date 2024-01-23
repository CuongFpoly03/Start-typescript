import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Navbar: React.FC = () => {
  const role = localStorage.getItem('User');
  return (
  <nav className="navbar bg-primary" data-bs-theme="dark">
    <div className="container-fluid">
    <Link to="/" className="navbar-brand">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link active">Product</Link>
        </li>
        <li className="nav-item">
        {role == "admin" ? <Link to="/admin" className="nav-link active">Admin</Link> : ""}
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link active">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link active">Register</Link>
        </li>
        <li className="nav-item">
        {localStorage.length >0 ? <Logout/> : ""}
        </li>

      </ul>
    </div>
  </div>
  </nav>
);
};

export default Navbar;
