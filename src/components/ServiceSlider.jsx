import React, { useState, useEffect } from 'react';

const ServiceSlider = () => {
    const [current, setCurrent] = useState(0);
    const [startX, setStartX] = useState(0);  // Track the starting point of the touch
    const slides = [
        {
            title: "Laundry",
            description: "Enjoy the convenience of professionally washed, dried, and folded laundry, leaving you with more time for what matters most.",
            link: "#services?section=laundry",
            class: "laundry-bg"
        },
        {
            title: "Dry Cleaning",
            description: "Trust our experts with your delicate fabrics and formal wear. We ensure each garment receives specialized care for optimal results.",
            link: "#services?section=drycleaning",
            class: "dry-bg"
        },
        {
            title: "Ironing",
            description: "Achieve that crisp, professional look with our expert ironing service. Perfect creases and wrinkle-free garments guaranteed.",
            link: "#services?section=ironing",
            class: "iron-bg"
        },
        {
            title: "Rafu (Darning)",
            description: "Get your torn or damaged clothes professionally repaired with our Rafu service. Invisible stitching, perfect finish revive your favorite outfits like new!",
            link: "#services?section=rafu",
            class: "rafoo-bg"
        }
    ];

    const totalSlides = slides.length;

    // Handle the next slide
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % totalSlides);
    };

    // Handle the previous slide
    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    // Handle touch start
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);  // Store starting point of touch
    };

    // Handle touch end
    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;  // Get the end point of touch
        const diff = startX - endX;

        // If swipe distance is greater than 50px, switch slide
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();  // Swipe left (next slide)
            } else {
                prevSlide();  // Swipe right (previous slide)
            }
        }
    };

    return (
        <div
            className="services-slider-container"
            onTouchStart={handleTouchStart}  // Detect touch start
            onTouchEnd={handleTouchEnd}    // Detect touch end
        >
            <div className="services-slider" style={{ transform: `translateX(-${100 * current}%)` }}>
                {slides.map((slide, index) => (
                    <div className="service-slide" key={index}>
                        <a href={slide.link} className={`service-card ${slide.class}`}>
                            <h3 className="service-title">{slide.title}</h3>
                            <p className="service-description">{slide.description}</p>
                        </a>
                    </div>
                ))}
            </div>
            <div className="services-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`services-dot ${index === current ? "active" : ""}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceSlider;
