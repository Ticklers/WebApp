import React, { Component } from 'react'
import "./Profile.css"
import rick from "../../img/rick.png"

class Profile extends Component {
    render() {
        return(
			<div className="row user-header p-y-2">
	      <div className="col-md-offset-2 col-md-8 p-y-4">
	        <div className="media">
            <div className="media-left">
              <a href="#">
                <img
									className="media-object" style={{'borderRadius': '50%'}}
									src={rick}
									alt="profile-pic"
								/>
              </a>
            </div>
            <div className="media-body p-l-6">
              <h2 className="media-heading m-t-15">champ_smrs</h2>
             
              <ul className="header-ul my-3">
                <li><strong className="count">50</strong> posts</li>
                <li><strong className="count">300k</strong> followers</li>
                <li><strong className="count">180</strong> following</li>
              </ul>
            {/*  <h4><strong>Han Solo</strong> Smuggler & Gambler</h4>*/}
            <ul className="bio-ul m-t-1">
              <li className="info">Rachit Singhal</li>
              <li className="m-t-0">A champ</li>
              <li> Bella Ciao</li>
              </ul>
            </div>
          </div>
        </div>
	    </div>
		);
	}
}
        
    



export default Profile;