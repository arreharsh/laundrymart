import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);
    const slides = [
        {
            quote: `"I've been using this service for the past six months and they truly offer the 'best laundry service near me.' I highly recommend their services to anyone in Faridabad looking for reliable, quality laundry care."`,
            name: 'Anuj Kumar',
            initials: 'AK'
        },
        {
            quote: `"As a busy professional, I don't have time for laundry. Laundry Mart has been a life-saver! Their pickup and delivery are always punctual, and the quality of cleaning is excellent. Their app makes scheduling super easy too!"`,
            name: 'Rajesh Tiwari',
            initials: 'RT'
        },
        {
            quote: `"I was skeptical about outsourcing my laundry at first, but Laundry Mart changed my mind completely. Their attention to detail is impressive, especially with my expensive suits. They treat each garment with care, and the results are consistently excellent."`,
            name: 'Ammy Verma',
            initials: 'AV'
        },
        {
            quote: `"What impresses me most about Laundry Mart is their consistency. I've been using their services for over a year now, and they never disappoint. The staff is courteous, the prices are reasonable, and the cleaning quality is top-notch!"`,
            name: 'Nishu Jadhav',
            initials: 'NJ'
        }
    ];

    const nextSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent - 1 + slides.length) % slides.length);
    };

    const setActive = (index) => {
        setCurrent(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [current]);

    return (
        <section className="testimonial-section">
            <div className="container">
                <h2 className="section-title">Our Clients Praise Us for Great Service</h2>
                <p className="section-subtitle">
                    Hear what our satisfied customers have to say about their experience with Laundry Mart
                </p>

                <div className="testimonial-container">
                    <div className="testimonial-slider">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`testimonial-slide ${current === index ? 'active' : ''}`}
                            >
                                <div className="testimonial-quote">{slide.quote}</div>
                                <div className="testimonial-author">
                                    <div className="testimonial-author-image">{slide.initials}</div>
                                    <div className="testimonial-author-info">
                                        <span className="testimonial-author-name">{slide.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonial-controls">
                        <button className="testimonial-arrow testimonial-prev" aria-label="Previous testimonial" onClick={prevSlide}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <div className="testimonial-dots">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`testimonial-dot ${current === index ? 'active' : ''}`}
                                    onClick={() => setActive(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button className="testimonial-arrow testimonial-next" aria-label="Next testimonial" onClick={nextSlide}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;