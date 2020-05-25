import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PostFeed from "./PostFeed";
import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/postActions";
import "./Profile1.css";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { memes } = this.props.post.posts;
    const { loading } = this.props.post;

    let postContent = null;

    postContent = <PostFeed memes={memes} />;

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{postContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
