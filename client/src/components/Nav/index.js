// import { Link } from "react-router-dom";
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

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

function Index({ isLoggedIn, onLogoutClick}) {
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
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="w-100">
        <img src="/images/v1.png" className="img-fluid" width="15%" alt="logo"/>
        <img src="/images/logo.png" width="50%" alt="logo"/>
        </div>


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
        <div className="mx-auto w-100">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {" "}
              <li className="nav-item">
                <a className="nav-link" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill navLogo" viewBox="0 0 16 16">
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
                  <a className="dropdown-item" href="/products/category2" >
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
                  About
                </a>
              </li>
              <li className="nav-item">
              {isLoggedIn ? (
            <button onClick={onLogoutClick} className="nav-link btn btn-link">
              Log Out
            </button>
          ) : (
            <Link to="/account" className="nav-link">
              My Account
            </Link>
          )}
              </li>
              <li className="nav-item">
            <Link className="nav-link" to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="nav-item">
          <Link
    className="nav-link"
    to="/giftIdea"
    style={{ color: 'red', fontWeight: 'bold' }}
  >
              Give me a gift idea please!
            </Link>
          </li>
            </ul>
          </div>
        </div>

      </nav>

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

export default Index;






// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { useQuery } from "@apollo/client";
// import { useStoreContext } from "../../utils/GlobalState";
// import {
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
// } from "../../utils/actions";
// import { QUERY_CATEGORIES } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";

// function Navbar() {
//   const [state, dispatch] = useStoreContext();

//   const { categories } = state;

//   const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

//   useEffect(() => {
//     if (categoryData) {
//       dispatch({
//         type: UPDATE_CATEGORIES,
//         categories: categoryData.categories,
//       });
//       categoryData.categories.forEach((category) => {
//         idbPromise("categories", "put", category);
//       });
//     } else if (!loading) {
//       idbPromise("categories", "get").then((categories) => {
//         dispatch({
//           type: UPDATE_CATEGORIES,
//           categories: categories,
//         });
//       });
//     }
//   }, [categoryData, loading, dispatch]);

//   const handleClick = (id) => {
//     dispatch({
//       type: UPDATE_CURRENT_CATEGORY,
//       currentCategory: id,
//     });
//   };

//   return (
//     <div>
//       {/* Main Navbar - FIX THIS PLS */}
//       <div className="mx-auto">
//         <div className="custom-collapse">
//           <ul className="navbar-nav custom-navbar-nav">
//             <li className="custom-nav-item">
//               <a className="custom-nav-link" href="/">
//                 Home
//               </a>
//             </li>
//             <li className="custom-nav-item">
//               <a className="custom-nav-link" href="/products">
//                 Products
//               </a>
//             </li>
//             <li className="custom-nav-item">
//               <a className="custom-nav-link" href="/about">
//                 About
//               </a>
//             </li>
//             <li className="custom-nav-item">
//               <a className="custom-nav-link" href="/account">
//                 My Account
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Static Navbar with Divider */}
//       <div className="custom-static-navbar">
//         {categories.map((item, index) => (
//           <React.Fragment key={item._id}>
//             <div className="custom-navbar-link">
//               <a
//                 href="/"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleClick(item._id);
//                 }}
//               >
//                 {item.name}
//               </a>
//             </div>
//             {index < categories.length - 1 && (
//               <div className="custom-navbar-divider"></div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

