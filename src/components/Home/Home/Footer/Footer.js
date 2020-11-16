import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons';
// library.add(faFacebookF);
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <p>H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka, Bangladesh Phone: 018XXXXXXXX E-mail: info@company.com</p>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><a className="bold-text" href="#">Company</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Site Map</a></li>
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Terms Conditions</a></li>
                            <li><a href="#">Submit Listing</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><a className="bold-text" href="#">Quick Links</a></li>
                            <li><a href="#">Quick Links</a></li>
                            <li><a href="#">Rentals</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms Conditions</a></li>
                            <li><a href="#">Our blog</a></li>
                        </ul>

                    </div>
                    <div class="col-md-3">
                        <p> <b>about us</b></p>
                        <p>We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>


                        <div className="social my-2">
                            <a href="" ><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="" ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="" ><FontAwesomeIcon icon={faYoutubeSquare} /></a>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;