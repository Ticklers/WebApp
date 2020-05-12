import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostForm from "./Postform";
import PostFeed from "./PostFeed";
//import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    //console.log(this.props.count);
    //const { memes, loading } = this.props.meme.memes;

    //let postContent;

    //if (memes === null || loading) {
    //postContent = "";
    //} else {
    //postContent = <PostFeed memes={memes} />;
    //}

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {/*  {postContent} */}
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
  meme: state.meme,
});

export default connect(mapStateToProps, { getPosts })(Posts);
