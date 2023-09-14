import React from "react";
import "./style.css";

function Index() {

  return (
    <div>
      {/* Main Navbar */}
<<<<<<< HEAD
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
=======
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>

        <img src="/images/v1.png" class="img-fluid" width="15%" alt="logo"/>

        </div>
        
        {/* <div>
          <a className="navbar-brand" href="/">
            Blissful Beginnings
        </a>
        </div> */}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="mx-auto">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {" "}
              <li className="nav-item">
                <a className="nav-link" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg>Home
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/products"
                  id="navbarDropdownProducts"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownProducts"
                >
                  <a className="dropdown-item" href="/products/category1">
                    Product 1
                  </a>
                  <a className="dropdown-item" href="/products/category2">
                    Product 2
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/products/all">
                    All Products
                  </a> */}
                {/* </div>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/about">
>>>>>>> main
                  About
                </a>
              </li>
              <li className="custom-nav-item">
                <a className="custom-nav-link" href="/account">
                  My Account
                </a>
              </li>
              <li className="nav-item">
            <Link className="nav-link" to="/orderHistory">
              Order History
            </Link>
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
<<<<<<< HEAD
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
=======
        </form>
      </nav>

      {/* Static Navbar with Divider */}
      {/* <div
        className="container-fluid"
        style={{ whiteSpace: "nowrap", backgroundColor: "#FFE5D9" }}
      >
        <div className="row mx-auto">
          <div className="col text-center">
            <a
              className="nav-link"
              href="#"
              style={{ fontSize: "18px", display: "block", padding: "10px 0" }}
            >
              Pushchairs
            </a>
          </div>
          <div className="col divider" style={{ flex: "0.01" }}></div>
          <div className="col text-center">
            <a
              className="nav-link"
              href="#"
              style={{ fontSize: "18px", display: "block", padding: "10px 0" }}
            >
              Clothing
            </a>
          </div>
          <div className="col divider" style={{ flex: "0.01" }}></div>
          <div className="col text-center">
            <a
              className="nav-link"
              href="#"
              style={{ fontSize: "18px", display: "block", padding: "10px 0" }}
            >
              Car Seats
            </a>
          </div>
          <div className="col divider" style={{ flex: "0.01" }}></div>
          <div className="col text-center">
            <a
              className="nav-link"
              href="#"
              style={{ fontSize: "18px", display: "block", padding: "10px 0" }}
            >
              Gifts
            </a>
          </div>
          <div className="col divider" style={{ flex: "0.01" }}></div>
          <div className="col text-center">
            <a
              className="nav-link"
              href="#"
              style={{ fontSize: "18px", display: "block", padding: "10px 0" }}
            >
              Toys
            </a>
          </div>
          <div className="col divider" style={{ flex: "0.01" }}></div>
          <div className="col text-center">
            <a
              className="nav-link"
              href="#"
              style={{ fontSize: "18px", display: "block", padding: "10px 0" }}
            >
              Sets & Bundles
            </a> */}
          {/* </div>
>>>>>>> main
        </div>
      </div> */}
    </div>
  );
}

export default Index;

