import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function Navbar() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      {/* Main Navbar - FIX THIS PLS */}
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

      {/* Static Navbar with Divider */}
      <div className="custom-static-navbar">
        {categories.map((item, index) => (
          <React.Fragment key={item._id}>
            <div className="custom-navbar-link">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item._id);
                }}
              >
                {item.name}
              </a>
            </div>
            {index < categories.length - 1 && (
              <div className="custom-navbar-divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
