import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import "./Profile1.css";

class PostItem extends Component {
  render() {
    const { meme } = this.props;
    return (
      <figure className="figure">
        <img className="photo" src={meme.mediaLink} alt={meme.caption} />
        <figcaption>
          {" "}
          <p className="description"> {meme.caption} </p>{" "}
        </figcaption>
        <div className="button-container"></div>
      </figure>
    );
  }
}
PostItem.propTypes = {
  meme: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PostItem);
