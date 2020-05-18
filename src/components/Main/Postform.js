import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";
import { storage } from "../../firebase/index";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      mediaLink: "",
      errors: {},
      image: null,
      progress: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.onClick = this.onhandleUpload.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const { user } = this.props.auth;
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((mediaLink) => {
            //console.log(mediaLink);
            this.setState({ mediaLink });

            //console.log(this.state.mediaLink);
            // mediaLink = url;
            // this.setState({ mediaLink: this.state.url });
            console.log(mediaLink);
            const newPost = {
              mediaLink: this.state.mediaLink,
              caption: this.state.caption,
              name: user.name,
              username: user.username,
              avatar: user.avatar,
              user: user.id,
            };
            console.log(newPost);
            this.props.addPost(newPost, this.props.history);
          });
      }
    );

    // this.setState({
    //   caption: "",
    //});
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      this.setState(() => ({
        image,
      }));
    }
  };

  /* onhandleUpload = () => {
    const { image, mediaLink, url } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((mediaLink) => {
            console.log(mediaLink);
            this.setState({ mediaLink });

            console.log(this.state.mediaLink);
            // mediaLink = url;
            // this.setState({ mediaLink: this.state.url });
            console.log(mediaLink);
          });
      }
    );
  };
*/
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="mt-3 py-5">
          <div className="form ">
            <form onSubmit={this.onSubmit}>
              <input
                type="file"
                name="mediaLink"
                onChange={this.handleChange}
              />

              <input
                type="text"
                placeholder="caption"
                name="caption"
                value={this.state.value}
                onChange={this.onChange}
              />
              <button type="submit">Post</button>
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
