import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="ml-auto">
        <li className="get-started">
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="ml-auto" >
        <li className="get-started">
          <Link to="/login">Log In</Link>
        </li>
        <li className="get-started">
          <Link to="/register">Sign Up</Link>
        </li>
      </ul>
    );

    return (
      <header id="header" className="fixed-top">
        <div className="container d-flex">
          <div className="logo mr-auto">
            {" "}
            <h1 className="text-light">
              <Link to="/">CoolName</Link>
            </h1>
            {/* FOR IMG LOGO <a href="index.html">
              <img src="ImgURL" alt="Logo" className="img-fluid" />
            </a> */}
          </div>

          <nav className="nav-menu d-none d-lg-block">
            <ul className="ml-auto">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li className="active">
                <Link to="/">Dummy</Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </nav>
        </div>
      </header>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
