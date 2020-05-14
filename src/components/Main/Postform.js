import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      mediaLink: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const { user } = this.props.auth;

    const newPost = {
      mediaLink: this.state.mediaLink,
      caption: this.state.caption,
      name: user.name,
      username: user.username,
      avatar: user.avatar,
      user:user.id
    };
    this.props.addPost(newPost);
    this.setState({
      mediaLink: "",
      caption: "",
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="mt-3 py-5">
          <div className="form ">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="mediaLink"
                name="mediaLink"
                value={this.state.mediaLink}
                onChange={this.onChange}
                error={errors.mediaLink}
              />
              <input
                type="text"
                placeholder="caption"
                name="caption"
                value={this.state.value}
                onChange={this.onChange}
                error={errors.caption}
              />

              <button type="submit"> Post </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Postform.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addPost })(Postform);
