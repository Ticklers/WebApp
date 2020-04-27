import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import $ from "jquery";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/dummylink">
            Dummy
          </Link>
        </li>
        <li className="nav-item get-started">
          <Link className="nav-link js-scroll-trigger" to="/" 
          onClick={this.onLogoutClick.bind(this)}
>
            Log Out
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item get-started">
          <Link className="nav-link js-scroll-trigger" to="/login">
            Log In
          </Link>
        </li>
        <li className="nav-item get-started">
          <Link className="nav-link js-scroll-trigger" to="/register">
            Sign Up
          </Link>
        </li>
      </ul>
    );

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">
            <h2 className="text-light">CoolName</h2>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu<i className="fas fa-bars ml-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive"></div>
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
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
