import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addComment } from "../../../actions/postActions";
import classnames from "classnames";
// import Tex from '../../common/TextAreaFieldGroup'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
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
    const { postId } = this.props;

    const newComment = {
      comment: this.state.comment,
      name: user.name,
      avatar: user.avatar,
    };
    console.log("Submit");
    this.props.addComment(postId, newComment);
    this.setState({ comment: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { postId } = this.state;

    return (
      <div className="container">
        <div className="form-label-group mx-auto">
          <div className="card-body">
            <form className="form-signin">
              <div className="form-label-group row mx-auto">
                <input
                  className="form-control form-control-lg"
                  id={postId}
                  // placeholder="Comment"
                  type="text"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.onChange}
                  style={{ width: "90%" }}
                />
                <label htmlFor={postId}>Comment</label>
                <i
                  className="fas fa-chevron-circle-right p-3"
                  onClick={this.onSubmit}
                ></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  postId: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addComment })(CommentForm);
