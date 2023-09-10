import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Index() {
  return (
    <div>
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
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
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
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
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link to="/account" className="nav-link">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Search Bar */}
        <form className="form-inline">
          <div className="input-group">
            <input
              className="form-control form-control-sm"
              type="search"
              placeholder="Search for anything"
              aria-label="Search"
              style={{
                width: "300px",
                background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M17.5 17.5L13.7617 13.755L17.5 17.5ZM15.8333 8.74999C15.8333 10.6286 15.087 12.4303 13.7587 13.7587C12.4303 15.087 10.6286 15.8333 8.74999 15.8333C6.87137 15.8333 5.0697 15.087 3.74132 13.7587C2.41293 12.4303 1.66666 10.6286 1.66666 8.74999C1.66666 6.87137 2.41293 5.0697 3.74132 3.74132C5.0697 2.41293 6.87137 1.66666 8.74999 1.66666C10.6286 1.66666 12.4303 2.41293 13.7587 3.74132C15.087 5.0697 15.8333 6.87137 15.8333 8.74999V8.74999Z" stroke="black" stroke-width="2" stroke-linecap="round"/></svg>') no-repeat 8px 50%`,
                paddingLeft: "32px",
                backgroundColor: "#FFE5D9",
              }}
            />
          </div>
        </form>

        {/* Shopping Cart Icon */}
        <div className="ml-2">
          <i className="fa fa-shopping-cart fa-2x"></i>
        </div>
      </nav>

      {/* Static Navbar with Divider */}
      <div
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
