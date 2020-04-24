import React, { Component } from "react";
import classnames from "classnames";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  // componentWillReceiveProps(nextProps) {               //NO LTS. SOON TO BE REMOVED
  //   if (nextProps.errors) this.setState({ errors: nextProps.errors });
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="bg my-5 py-5">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form
                  noValidate
                  onSubmit={this.onSubmit}
                  className="form-signin"
                >
                  <div className="form-label-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.name,
                      })}
                      placeholder="Name"
                      name="name"
                      id="inputUserame"
                      value={this.state.name}
                      onChange={this.onChange}
                      autofocus
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                    <label for="inputUserame">Name</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      name="email"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.email,
                      })}
                      placeholder="Email address"
                      required
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                    <label for="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.password,
                      })}
                      name="password"
                      placeholder="Password"
                      required
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                    <label for="inputPassword">Password</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.password2,
                      })}
                      name="password2"
                      id="inputConfirmPassword"
                      placeholder="Password"
                      value={this.state.password2}
                      onChange={this.onChange}
                    />
                    {errors.password2 && (
                      <div className="invalid-feedback">{errors.password2}</div>
                    )}
                    <label for="inputConfirmPassword">Confirm Password</label>
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Register
                  </button>
                  <Link className="d-block text-center mt-2 small" to="/login">
                    Already have an account? Log in
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
