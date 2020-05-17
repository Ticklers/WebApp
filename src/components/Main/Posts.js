import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostForm from "./Postform";
import PostFeed from "./PostFeed";
// import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { memes } = this.props.post.posts;

    let postContent = null;

    postContent = <PostFeed memes={memes} />;

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  meme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
