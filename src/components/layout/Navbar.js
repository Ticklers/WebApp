import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
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
    this.props.history.push("/login");
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const navMenu = this.state.menu ? "navMenu" : " ";

    const authLinks = (
      <ul className="navbar-nav left text-uppercase ml-auto">
        <li className="nav-item hoverable menuclass">
          <Link
            className="nav-link js-scroll-trigger"
            onClick={this.toggleMenu}
            to="/profile"
          >
            Profile
          </Link>
        </li>
        <li className="nav-item hoverable menuclass">
          <Link
            className="nav-link js-scroll-trigger"
            onClick={this.toggleMenu}
            to="/AddPost"
          >
            Create post
          </Link>
        </li>
        <li className="nav-item hoverable menuclass">
          <Link
            className="nav-link js-scroll-trigger"
            onClick={this.toggleMenu}
            to="/feed"
          >
            Feed
          </Link>
        </li>
        <li className="nav-item hoverable">
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
        <li className="nav-item hoverable">
          <Link
            className="nav-link js-scroll-trigger"
            to="/login"
            onClick={this.toggleMenu}
          >
            Log In
          </Link>
        </li>
        <li className="nav-item hoverable">
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
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link
            className="navbar-brand design js-scroll-trigger"
            onClick={this.toggleMenu}
            to="/"
          >
            <h2 className="text-light">Tickle</h2>
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
            <span className="navbar-toggler-icon"></span>
            {/* Menu<i className="fas fa-bars ml-1"></i> */}
          </button>
          <div
            className={"collapse navbar-collapse " + navMenu}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-uppercase">
              <li className="nav-item hoverable">
                <Link
                  className="nav-link js-scroll-trigger"
                  to="/"
                  onClick={this.toggleMenu}
                >
                  Home
                </Link>
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

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
