import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import PostItem from "../PostItem";
import CommentFeed from "./CommentFeed";
import { getPost } from "../../../actions/postActions";
import Spinner from "../../common/Spinner";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { meme, loading } = this.props.post;
    let postContent;

    if (meme === null || loading || Object.keys(meme).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div className="row">
          <PostItem meme={meme} />
          <div className="col-lg-8 col-md-12 col-sm-12 mx-auto">
            <div className="post-card" style={{ background: "rgb(50,50,50)" }}>
              <div className="card-body">
                <CommentFeed postId={meme._id} comments={meme.comments} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div className="container mt-5">{postContent}</div>;
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  meme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
