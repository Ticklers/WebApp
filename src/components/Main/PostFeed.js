import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";
class PostFeed extends Component {
  render() {
    const { memes } = this.props;

    return memes.map((meme) => <PostItem key={meme._id} meme={meme} />);
  }
}
PostFeed.propTypes = {
  memes: PropTypes.array.isRequired,
};

export default PostFeed;
