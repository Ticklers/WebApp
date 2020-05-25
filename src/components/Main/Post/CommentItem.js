import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CommentItem extends Component {
  render() {
    const { comment, postId } = this.props;

    return (
      <div className="pl-4 py-2">
        <div className="row">
          <Link to="/TODO-user">
            <img
              className="rounded-circle d-none image d-md-block"
              src={comment.avatar}
              alt=""
              className="comment-img"
            />
          </Link>
          <Link to="/">
            <p className="pl-4 text-white text-light">
              <b>{comment.username}</b>
            </p>
          </Link>
        </div>
        <p className="pl-5">{comment.comment}</p>
        <hr />
      </div>
    );
  }
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateTopProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateTopProps)(CommentItem);
