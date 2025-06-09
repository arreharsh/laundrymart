import React from 'react';
import { useState } from 'react';

const Footer = ({ onCallbackClick }) => {



    return (
        <>
            <section className="callback-section">
                <div className="container">
                    <div className="callback-content">
                        <h2>Request a Call Back?</h2>
                        <p>Let us know your laundry needs, and our team will contact you to schedule a convenient pickup time.
                        </p>
                        <a id="callbackButton" onClick={onCallbackClick} className="btn callback-btn">Get Me Back</a>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-column">
                            <h3 className="footer-title">Laundry Mart</h3>
                            <p className="footer-description">Transforming laundry experiences with quality care and convenience</p>
                            <div className="social-links">
                                <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
                                <a href="/" aria-label=""><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>


                        <div className="footer-column">
                            <h3 className="footer-title">Quick Links</h3>
                            <ul className="footer-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>


                        <div className="footer-column">
                            <h3 className="footer-title">Our Services</h3>
                            <ul className="footer-links">
                                <li><a href="/services?section=laundry">Laundry Services</a></li>
                                <li><a href="/services?section=drycleaning">Dry Cleaning</a></li>
                                <li><a href="/services?section=ironing">Ironing</a></li>
                                <li><a href="/services?section=rafu">Rafu (Darning)</a></li>
                            </ul>
                        </div>
                        <a href="https://wa.link/7ama43" className="whatsapp-button" title="Chat on WhatsApp" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
                        </a>

                        <div className="footer-column">
                            <h3 className="footer-title">Contact Us</h3>
                            <ul className="contact-info">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p>H-599, Nangla Road, Jawahar Colony, Faridabad, 121005</p>
                                </li>
                                <li>
                                    <i className="fas fa-phone-alt"></i>
                                    <p><a href="tel:8287778324">+91 70651 96288</a></p>
                                </li>
                                <li>
                                    <i className="fas fa-envelope"></i>
                                    <p><a href="mailto:ypg8324@gmail.com">arreharsh@gmail.com</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom footer-bottom-links">
                        <p className="copyright">© 2025 Designed by <a className="fab fa-x-twitter" ></a> <a target='new' href="https://x.com/arreharsh"> Arre Harsh </a>
                            |
                            All Rights Reserved</p>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};
export default Footer;