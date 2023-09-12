import React from "react";
import "./style.css";

function Index() {
  return (
    <div>
      {/* Main Navbar */}
      <nav className="custom-navbar">
        <div>
          <img src="../images/temp-logo.svg" alt="logo" />
        </div>
        <div className="mx-auto">
          <div className="custom-collapse">
            <ul className="navbar-nav custom-navbar-nav">
              <li className="custom-nav-item">
                <a className="custom-nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="custom-nav-item">
                <a className="custom-nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="custom-nav-item">
                <a className="custom-nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="custom-nav-item">
                <a className="custom-nav-link" href="/account">
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Search Bar and Shopping Cart Container */}
        <div className="custom-search-cart-container">
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
