import React from 'react';
import './Footerstyle.css';
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} />
                        <div>
                            <p>Kathmandu,</p>
                            <p>Nepal.</p>
                        </div>
                    </div>
                    <div className="Phone">
                        <FaPhone size={20} />
                        <h4>9842029267</h4>
                    </div>
                    <div className="Mail">
                        <FaMailBulk size={20} />
                        <h4>koiralaraajz@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About my company</h4>
                    <p>This is Raj Koirala. I'm trying to pursue a new job in the development sector and ready to face any challenges related to it</p>
                    <div className="social">
                        <a href="https://www.facebook.com/raj.koirala.925/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.instagram.com/__raajz__?igsh=Mnd6ZDNlZXdoNGlk" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                        </a>
                        <a href="http://linkedin.com/in/raajz-koirala-8341a4284" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com/raajz49" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
