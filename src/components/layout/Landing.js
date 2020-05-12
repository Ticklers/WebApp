import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import Card from "./Card";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/");
  }

  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading text-dark">
            Welcome To New Site!
          </div>
          <div className="masthead-heading text-uppercase text-dark">
            It's Nice To Meet You!!
          </div>
          <div className="masthead-subheading  text-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deserunt
            in et vero corrupti numquam laborum iste consequuntur! Cum possimus
            numquam quae commodi aliquid natus temporibus velit quisquam
            consequatur a?
          </div>
          <Card />
          <Link
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            to="/register"
          >
            Get Started Here
          </Link>
        </div>
      </header>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
