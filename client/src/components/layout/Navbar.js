import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header id="header" className="fixed-top">
        <div className="container d-flex">
          <div className="logo mr-auto">
            {" "}
            <h1 className="text-light">
              <Link to="/">CoolName</Link>
            </h1>
            {/* <a href="index.html">
              <img src="ImgURL" alt="Logo" className="img-fluid" />
            </a> */}
          </div>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li className="active">
                <Link to="/">Dummy</Link>
              </li>
              <li className="get-started">
                <Link to="/login">Log In</Link>
              </li>
              <li className="get-started">
                <Link to="/register">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
