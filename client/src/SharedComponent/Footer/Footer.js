import React, { Component } from 'react';
import './Footer.css';
import facebookicon from '../../images/facebookicon.svg';
import instagramicon from '../../images/instagramicon.svg';
import twittericon from '../../images/twittericon.svg';
import youtubeicon from '../../images/youtubeicon.svg';
class Footer extends Component {
  render() {
    return (
      // we will get student image and name from database
      <div className="main-footer">
        <div className="container">
          <div className="footer-text"> © 2020 Gaza Sky Geeks.</div>
          <div className="footer-icons">
            <img className="facebook-img" src={facebookicon} alt="facebook icon" />
            <img className="instagram-img" src={instagramicon} alt=" instagrm icon" />
            <img className="twitter-img" src={twittericon} alt=" twitter icon" />
            <img className="youtube-img" src={youtubeicon} alt="youtube icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
