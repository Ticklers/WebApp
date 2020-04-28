import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const navMenu = this.state.menu ? "navMenu" : " ";

    const authLinks = (
      <ul className="navbar-nav left text-uppercase ml-auto">
        <li className="nav-item menuclass">
          <Link
            className="nav-link js-scroll-trigger"
            onClick={this.toggleMenu}
            to="/dummylink"
          >
            Dummy
          </Link>
        </li>
        <li className="nav-item get-started">
          <Link
            className="nav-link js-scroll-trigger"
            to="/login"
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
          <Link
            className="nav-link js-scroll-trigger"
            to="/login"
            onClick={this.toggleMenu}
          >
            Log In
          </Link>
        </li>
        <li className="nav-item get-started">
          <Link
            className="nav-link js-scroll-trigger"
            to="/register"
            onClick={this.toggleMenu}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    );

    return (
      <nav
        className="navbar navbar-expand-lg color navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link
            className="navbar-brand js-scroll-trigger"
            onClick={this.toggleMenu}
            to="/"
          >
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
          <div
            className={"collapse navbar-collapse " + navMenu}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-uppercase ml-3">
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll-trigger"
                  to="/"
                  onClick={this.toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#about"
                  onClick={this.toggleMenu}
                >
                  About
                </a>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
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
