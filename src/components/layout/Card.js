import React, { Component } from "react";

import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="stage">
          <li className="scene">
            <div className="movie first">
              <div className="poster"></div>
              <div className="info uno">
                <header>
                  <h1>It's a Wonderful Life</h1>
                  <span>Some subheading</span>
                </header>
                <p>
                  In Bedford Falls, New York on Christmas Eve, George Bailey is
                  deeply troubled. Prayers for his well-being from friends and
                  family reach Heaven. Clarence Odbody, Angel Second class, is
                  assigned to visit Earth to save George, thereby earning his
                  wings. Franklin and Joseph, the head angels, review George's
                  life with Clarence.
                </p>
              </div>
            </div>
          </li>
          <li className="scene">
            <div className="movie second">
              <div className="poster"></div>
              <div className="info dos">
                <header>
                  <h1>Lorem ipsum</h1>
                  <span>Some subheading</span>
                </header>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  delectus laudantium, fugit veritatis corrupti similique, qui,
                  in quam vitae id quibusdam cumque tempore atque nesciunt esse
                  fuga nam aliquam ipsa!
                </p>
              </div>
            </div>
          </li>
          <li className="scene">
            <div className="movie third">
              <div className="poster"></div>
              <div className="info tres">
                <header>
                  <h1>Lorem ipsum</h1>
                  <span>Some subheading</span>
                </header>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  delectus laudantium, fugit veritatis corrupti similique, qui,
                  in quam vitae id quibusdam cumque tempore atque nesciunt esse
                  fuga nam aliquam ipsa!
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
