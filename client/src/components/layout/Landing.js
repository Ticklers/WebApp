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
      <section id="hero">
        <div className="hero-container text-class" data-aos="fade-up">
          <h1>Welcome to Meme</h1>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            tempore nihil provident explicabo, odio sunt cumque saepe ad!
            Placeat nostrum in commodi animi. Saepe sint minima minus fugit enim
            tempore!
          </h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            culpa deserunt fuga cupiditate numquam recusandae ipsam atque eum
            beatae ratione ab consequuntur totam, alias tenetur nihil in
            doloremque ipsa dignissimos.
          </h4>
          <h6>Different fonts to be used above</h6>
          <Link to="" className="btn-get-started scrollto">
            Get Started
          </Link>
        </div>
      </section>
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
