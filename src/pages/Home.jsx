import TestimonialSlider from '../components/TestimonialSlider'
import FAQSection from '../components/FAQSection'
import ServiceSlider from '../components/ServiceSlider'
import PopupForm from '../components/PopupForm'
import CallbackPopup from '../components/CallbackPopup'
import React, { useState } from 'react';




const Home = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    return (

        <div>


            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="hero-tagline">Schedule. Pickup. Deliver.</div>
                            <h1>Hassle-Free Laundry & Dry Cleaning</h1>
                            <p className="hero-description">We Collect, Clean & Deliver to Your Doorstep.</p>
                            <ul className="hero-features">
                                <li>
                                    <img src="https://ext.same-assets.com/3168908769/4252861238.svg" alt="Calendar"
                                        className="hero-icon" />
                                    Schedule Collection Days, 24-48 hours Delivery.
                                </li>
                                <li>
                                    <img src="https://ext.same-assets.com/3168908769/2067545548.svg" alt="Payment"
                                        className="hero-icon" />
                                    Easy Payment Options, Dedicated Customer Support.
                                </li>
                            </ul>
                            <a className="btn schedule-btn openFormBtn" onClick={() => setIsPopupOpen(true)} >Schedule Pickup</a>
                        </div>
                        <div className="hero-image">
                            <img src="https://ext.same-assets.com/3168908769/2563901416.svg" alt="Laundry Service" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Discover All That Laundry Mart Has to Offer - Tailored Cleaning Services for Your Wardrobe.
                    </p>

                    <ServiceSlider />


                    <div className="text-center">
                        <a className="btn book-now-btn openFormBtn" onClick={() => setIsPopupOpen(true)} >Book Now!!</a>
                    </div>


                </div>

            </section>

            <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />



            <CallbackPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />



            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">We Collect, Clean, and Deliver — Laundry Mart Makes Life Easier!</h2>
                    <p className="section-subtitle">At Laundry Mart, we offer reliable laundry and dry cleaning services designed to
                        make
                        your life easier. From careful garment handling to on-time delivery at your doorstep, we ensure your clothes
                        are
                        treated with the utmost care and professionalism.</p>

                    <div className="features-grid">

                        <div className="feature-card">
                            <div className="feature-icon">
                                <img src="/Assets/watch.svg" alt="Scheduling Icon" />
                            </div>
                            <h3 className="feature-title">Effortless Scheduling</h3>
                            <p className="feature-description">Book Your Laundry Pickup in Just a Few Clicks.</p>
                        </div>


                        <div className="feature-card">
                            <div className="feature-icon">
                                <img src="/Assets/pickup.svg" alt="Pickup Icon" />
                            </div>
                            <h3 className="feature-title">Doorstep Pickup</h3>
                            <p className="feature-description">Seamless Pickup at Your Convenience.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <img src="/Assets/cleaning.svg" alt="Cleaning Icon" />
                            </div>
                            <h3 className="feature-title">Professional Cleaning</h3>
                            <p className="feature-description">Eco-Friendly Cleaning for Every Fabric.</p>
                        </div>


                        <div className="feature-card">
                            <div className="feature-icon">
                                <img src="/Assets/ontime.svg" alt="Delivery Icon" />
                            </div>
                            <h3 className="feature-title">On-Time Delivery</h3>
                            <p className="feature-description">Fresh, Clean Clothes Delivered Right to Your Doorstep.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <a className="btn schedule-btn openFormBtn" onClick={() => setIsPopupOpen(true)}  >Schedule Pickup</a>
                    </div>
                </div>
            </section>


            <TestimonialSlider />


            <FAQSection />

            <section className="app-section">

                <div className="container">
                    <div className="app-content">
                        <div className="app-text">
                            <h2>Get Your Clothes Cleaned, With Just A Tap Of Finger</h2>
                            <p>Available on Play Store </p>
                            <div className="app-buttons">
                                <a href="/app" className="app-button">
                                    <i className="fab fa-android"></i>
                                    Download App
                                </a>
                                <a href="/trackorder" className="app-button">
                                    <i className="fas fa-mobile-alt"></i>
                                    Track Order Status
                                </a>
                            </div>
                        </div>
                        <div className="app-qr">
                            <div className="qr-code">
                                <p><h3>Scan Me</h3></p>
                                <div className="qr-image">
                                    <img src="/Assets/QRAPP.png" alt="QR Code" />
                                </div>
                                <p style={{ fontWeight: "bold" }}>Coming Soon</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </div >


    )
}




export default Home;