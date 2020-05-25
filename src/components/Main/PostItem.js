import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/postActions";
import classnames from "classnames";
import { Link } from "react-router-dom";
import CommentForm from "./Post/CommentForm";

import "./Post.css";

class PostItem extends Component {
  onLike(id, arr) {
    this.props.addLike(id);
  }

  onUnlike(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter((like) => like.userId === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { meme } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 mx-auto">
            <div
              className="post-card my-5"
              style={{ background: "rgb(50,50,50)" }}
            >
              <div className="card-body">
                <div className="profile row">
                  <img src={meme.avatar} className="profile-img" alt="Avatar" />
                  <p className="pl-2">{meme.name}</p>
                </div>
                <Link to={`/post/${meme._id}`}>
                  <img
                    className="image mx-auto d-flex justify-content-center"
                    src={meme.mediaLink}
                    alt={meme.caption}
                  />
                </Link>
                <hr />
                <p className="pl-2">{meme.caption}</p>
                <i
                  onClick={
                    this.findUserLike(meme.likes)
                      ? this.onUnlike.bind(this, meme._id)
                      : this.onLike.bind(this, meme._id)
                  }
                  className={classnames("far fa-heart p-2 like", {
                    "text-danger fas": this.findUserLike(meme.likes),
                  })}
                ></i>
                <i className="far fa-comment p-2"></i>
                <div className="pl-2">
                  <small>
                    {meme.likes.length} Like{meme.likes.length > 1 ? "s" : ""}
                  </small>
                </div>
                <CommentForm postId={meme._id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
PostItem.propTypes = {
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  meme: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
