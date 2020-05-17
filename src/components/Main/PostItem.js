import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/postActions";
import classnames from "classnames";
// import { Link } from "react-router-dom";

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
    const { meme, auth } = this.props;
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
                  <img
                    src={auth.user.avatar}
                    className="profile-img"
                    alt="Avatar"
                  />
                  <p className="pl-2">{auth.user.name}</p>
                </div>
                <img
                  className="image mx-auto d-flex justify-content-center"
                  src={meme.mediaLink}
                  alt={meme.caption}
                />
                <hr />
                <p className="pl-2">{meme.caption}</p>
                <button
                  onClick={
                    this.findUserLike(meme.likes)
                      ? this.onUnlike.bind(this, meme._id)
                      : this.onLike.bind(this, meme._id)
                  }
                  type="button"
                  className="btn btn-dark mx-2"
                  style={{ boxShadow: "none" }}
                >
                  <i
                    className={classnames("fas fa-thumbs-up", {
                      "text-danger": this.findUserLike(meme.likes),
                    })}
                  ></i>
                </button>
                <span className="pl-2">
                  <small>
                    {meme.likes.length} Like{meme.likes.length > 1 ? "s" : ""}
                  </small>
                </span>
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
