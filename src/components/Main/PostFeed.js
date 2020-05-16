import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";
import Spinner from "../common/Spinner";

class PostFeed extends Component {
  render() {
    const { memes } = this.props;
    if (memes) {
      return memes.map((meme) => <PostItem key={meme._id} meme={meme} />);
    }
    return <Spinner />;
  }
}
PostFeed.propTypes = {
  memes: PropTypes.array.isRequired,
};

export default PostFeed;
