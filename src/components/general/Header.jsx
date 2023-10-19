import React from "react";
import Logo from "../../assets/images/logo.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone, faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faUser  } from "@fortawesome/free-regular-svg-icons";

function Header() {
    return (
		<header className="header">
			<div className="logo-container">
				<div className="image-container">
					<img src={Logo} alt="Logo" />
				</div>
			</div>
			<nav className="nav-menu">
				<a href="#">Explore Course</a>
				<a href="#">
					Destinations
					<FontAwesomeIcon icon={faCaretDown} />
				</a>
				<a href="#">
					Centers
					<FontAwesomeIcon icon={faCaretDown} />
				</a>
			</nav>
			<div className="Hamburger-nav">
				<div className="hamburger-icon">
					<FontAwesomeIcon icon={faBars} />
				</div>
				<div className="icon-container">
					<FontAwesomeIcon icon={faCaretRight} />
					Book an appointment
				</div>
				<div>
					<FontAwesomeIcon icon={faPhone} />
				</div>
				<div>
					<FontAwesomeIcon icon={faUser} />
				</div>
			</div>
		</header>
	)
}

export default Header;
