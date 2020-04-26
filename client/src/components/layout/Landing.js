import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/");
  }

  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To New Site!</div>
          <div className="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <div className="masthead-subheading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deserunt
            in et vero corrupti numquam laborum iste consequuntur! Cum possimus
            numquam quae commodi aliquid natus temporibus velit quisquam
            consequatur a?
          </div>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui et cum
            totam necessitatibus dicta nulla. Deleniti omnis pariatur, eveniet
            fugit fugiat saepe facilis molestias ipsa laboriosam libero
            similique voluptate earum?
          </h3>
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
