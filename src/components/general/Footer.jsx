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
import City from "../../assets/images/city.jpg"

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
						Since 2012, Medcity International Overseas Corporation has been offering gamut of Professional Services to students who aspire to study overseas and proficient professionals who dream of working overseas.
                    </p>
                </div>
                <div className="address">
                    <h6>Contact Address</h6>
                    <p>
						Medcity International Overseas Corporation,
						Chettipeedika, Kannur - 4, Kerala, India.
                    </p>
                </div>
                <div className="social-media">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} className="instagram" />
                    <FontAwesomeIcon icon={faYoutube} className="youtube-color" />
                    <FontAwesomeIcon icon={faTwitter} className="twitter-color" />
                    <FontAwesomeIcon icon={faLinkedinIn} className="linkedin-color" />
                    <FontAwesomeIcon icon={faPinterestP} className="pinterest" />
                </div>
            </div>
            <div className="bottom">
				<div className="destinations">
					<div className="left">
						<h6>Destinations</h6>
					</div>
					<div className="right">
						<div className="top">
							<p>Study in USA</p>
							<p>Study in USA</p>
							<p>Study in USA</p>
							<p>Study in USA</p>
							<p>Study in USA</p>
							<p>Study in USA</p>
							<p>Study in USA</p>
						</div>
						<hr />
						<div className="bottom">
							<p>Study in USA</p>
							<p>Study in USA</p>
							<p>Study in USA</p>
							<p>Study in USA</p>
							<p>Study in USA</p>
							<p>Study in USA</p>
							<p>Study in USA</p>
						</div>
					</div>
				</div>
				<div className="foot-image">
					<p>© 2023 Medcity International Overseas Corporation. All rights reserved.</p>
				</div>
			</div>
        </footer>
    );
}

export default Footer;
