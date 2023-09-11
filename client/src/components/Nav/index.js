import React from "react";
import "./style.css";

function Index() {
  return (
    <div>
      {/* Main Navbar */}
      <nav className="custom-navbar">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        {/* Remove the navbar toggler button */}
        <div className="mx-auto">
          <div className="custom-collapse">
            <ul className="navbar-nav custom-navbar-nav">
              <li className="custom-nav-item">
                <span className="custom-nav-link">Home</span>
              </li>
              <li className="custom-nav-item">
                <span className="custom-nav-link">Products</span>
              </li>
              <li className="custom-nav-item">
                <span className="custom-nav-link">About</span>
              </li>
              <li className="custom-nav-item">
                <span className="custom-nav-link">My Account</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Search Bar */}
        <form className="custom-search-form">
          <div className="input-group">
            <input
              className="custom-search-input"
              type="search"
              placeholder="Search for anything"
              aria-label="Search"
            />
          </div>
        </form>

        {/* Shopping Cart Icon */}
        <div className="custom-cart-icon">
          <i className="fa fa-shopping-cart fa-2x"></i>
        </div>
      </nav>

      {/* Static Navbar with Divider */}
      <div className="custom-static-navbar">
        <div className="custom-navbar-link">
          <a href="/">Pushchairs</a>
        </div>
        <div className="custom-navbar-divider"></div>
        <div className="custom-navbar-link">
          <a href="/">Clothing</a>
        </div>
        <div className="custom-navbar-divider"></div>
        <div className="custom-navbar-link">
          <a href="/">Car Seats</a>
        </div>
        <div className="custom-navbar-divider"></div>
        <div className="custom-navbar-link">
          <a href="/">Gifts</a>
        </div>
        <div className="custom-navbar-divider"></div>
        <div className="custom-navbar-link">
          <a href="/">Toys</a>
        </div>
        <div className="custom-navbar-divider"></div>
        <div className="custom-navbar-link">
          <a href="/">Sets & Bundles</a>
        </div>
      </div>
    </div>
  );
}

export default Index;
