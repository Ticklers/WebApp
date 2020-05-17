import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { getCurrentProfile } from "../../actions/profileActions";

import Profile1 from "./Profile1";
import "./Profile.css";

class Profile extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <div className="row user-header p-y-2">
          <div className="col-md-offset-2 col-md-8 p-y-4">
            <div className="media">
              <div className="media-left">
                <a href="/">
                  <img
                    className="media-object"
                    style={{ borderRadius: "50%" }}
                    src={user.avatar}
                    alt="profile-pic"
                  />
                </a>
              </div>
              <div className="media-body p-l-6">
                <h2 className="media-heading m-t-15">{user.username}</h2>
                <button className="ml-3">Edit Profile</button>

                <ul className="header-ul my-3">
                  <li>
                    <strong className="count">0</strong> posts
                  </li>
                  <li>
                    <strong className="count">0</strong> followers
                  </li>
                  <li>
                    <strong className="count">0</strong> following
                  </li>
                </ul>
                <h4>
                  <strong>Han Solo</strong> Smuggler & Gambler
                </h4>
                <ul className="bio-ul m-t-1">
                  <li className="info">{user.name}</li>
                  <li className="m-t-0">A champ</li>
                  <li> Bella Ciao</li>
                  <li> {user._id}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Profile1 />
        </div>
      </div>
    );
  }
}
Profile.propTypes = {
  // getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
