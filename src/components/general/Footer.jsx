import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faYoutube,
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

import Mob from "../../assets/images/cell-phone.png";
import Tel from "../../assets/images/telephone.png";
import Logo from "../../assets/images/logo.jpeg";

function Footer() {
    return (
        <footer>
            <div className="top">
                <div className="contact">
                    <div className="image-container">
                        <img src={Tel} alt="telephone" />
                    </div>
                    <div className="content">
                        <p>Contact Number</p>
                        <a href="tel:+81982318933">+81982318933</a>
                    </div>
                </div>
                <div className="v-line"></div>
                <div className="contact">
                    <div className="image-container">
                        <img src={Mob} alt="Mobile" />
                    </div>
                    <div className="content">
                        <p>Mobile Number</p>
                        <a href="tel:+81982318933">+81982318933</a>
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="logo-container">
                    <div className="image-logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                </div>
                <div className="about">
                    <h6>About Us</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error mollitia alias, minima dolores fugit quibusdam
                        molestias! Fugiat saepe doloremque facilis ipsum quos
                    </p>
                </div>
                <div className="address">
                    <h6>Contact Address</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error mollitia alias, minima dolores fugit quibusdam
                        molestias! Fugiat saepe doloremque facilis ipsum quos
                    </p>
                </div>
                <div className="social-media">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <FontAwesomeIcon icon={faPinterestP} />
                </div>
            </div>
            <div className="bottom"></div>
        </footer>
    );
}

export default Footer;
