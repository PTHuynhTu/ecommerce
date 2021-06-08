import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faUser,
  faUserPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import promotion from "../../assets/images/promotion.png";

const NavBar = () => {
  const handleLogout = () => {};
  let links;
  let signOut;

  // if (localStorage.getItem("isLoggedIn") || isLoggedIn) {
  //   links = (
  //     <li className="nav-item">
  //       <Link to={"/account"}>
  //         <span className="nav-link pl-5 pr-5">
  //           <FontAwesomeIcon className="mr-2" icon={faUser} />
  //           MY ACCOUNT
  //         </span>
  //       </Link>
  //     </li>
  //   );
  //   signOut = (
  //     <Link to={"/"} onClick={handleLogout}>
  //       <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />
  //       EXIT
  //     </Link>
  //   );
  // } else {
  links = (
    <>
      <li className="nav-item">
        <Link to={"/login"} className="nav-link pl-5 pr-3">
          <FontAwesomeIcon className="mr-2" icon={faSignInAlt} />
          SIGN IN
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/registration"} className="nav-link">
          <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
          SIGN UP
        </Link>
      </li>
    </>
  );
  signOut = null;
  // }

  return (
    <div>
      <div
        id="header"
        className="container-fluid header-top d-none d-md-block pb-5 pt-5"
      >
        <img
          src="https://digitalfirst.tdcgroup.com/site/wp-content/uploads/2018/05/digital_rev1-1.png"
          className="img-logo-navbar rounded mx-auto d-block"
          alt="logo"
        />
        <img
          src={promotion}
          className="img-promotion-navbar rounded mx-auto d-block"
          alt="promotion"
        />
      </div>
      <div className="container-fluid bg-black">
        <nav
          id="navbar-main"
          className={`container navbar navbar-expand-lg bg-black text-white `}
          style={{ fontSize: "18px" }}
        >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item">
                <Link to={"/"}>
                  <span className="nav-link pl-5 pr-5">TRANG CHỦ</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={{ pathname: "/menu", state: { id: "all" } }}>
                  <span className="nav-link pl-5 pr-5">ĐIỆN THOẠI</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contacts"}>
                  <span className="nav-link pl-5 pr-5">LIÊN HỆ</span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/cart"}>
                  <FontAwesomeIcon
                    className="fa-shopping-cart"
                    icon={faShoppingCart}
                  />

                  {/* <i 
                    className="fas fa-shopping-cart fa-lg pl-5"
                    style={{ color: "white" }}
                  ></i> */}
                  <h5
                    className="d-inline"
                    style={{
                      position: "relative",
                      right: "15px",
                      bottom: "8px",
                    }}
                  >
                    <span className="badge badge-success">5</span>
                  </h5>
                </Link>
              </li>
              {links}
            </ul>
            {signOut}
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
