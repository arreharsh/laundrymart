import React, { useState, useRef } from 'react';


const PopupForm = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('Submitting Request...');
    const formRef = useRef(null);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setMessage('Submitting Request...');

        const form = formRef.current;
        const formData = new FormData(form);

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbyXdv-3SlbbHingRWfE26g5Y7KFfKgpW8hoon7gq7fUjFb1PFpwmA2mhmONGONGaK8Exw/exec',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            if (response.ok) {
                setSuccess(true);
                setMessage('Thank You! Your request has been submitted.');
                form.reset();

                setTimeout(() => {
                    setLoading(false);
                    setSuccess(false);
                    setMessage('Submitting Request...');
                    onClose(); 
                }, 2000);
            } else {
                throw new Error();
            }
        } catch (err) {
            setMessage('Something went wrong!');
            setTimeout(() => setLoading(false), 2000);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={handleOverlayClick}>
            <div className="popup-form" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h2>Book Your Slot</h2>
                <form id="bookingForm" ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="tel" name="phone" placeholder="Mobile Number" required />
                    <input type="text" name="flat" placeholder="Flat / House No." required />
                    <input type="text" name="address" placeholder="Enter your full address" required />
                    <label for="services">Select Service</label>
                    <select name="item" id="services" required className="dropdown">
                    <option value="" disabled selected>-- Select Service --</option>
                    <option value="laundry">Laundry</option>
                    <option value="drycleaning">Dry Cleaning</option>
                    <option value="ironing">Ironing</option>
                    <option value="rafu">Rafu (Darning)</option>
                    </select>
                    <button type="submit">Book Now</button>
                </form>
            </div>

            {loading && (
                <div id="loader" style={{ display: "flex", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(255, 255, 255, 0.85)", zIndex: 9999, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    {!success ? (
                        <div className="spinner"></div>
                    ) : (
                        <div className="success-check" id="successCheck" style={{ display: "block" }}  >
                            <svg viewBox="0 0 52 52">
                                <path d="M14 27l7 7 17-17" />
                            </svg>
                        </div>
                    )}

                    <p className="loader-text" id="loaderText"
                        style={{ marginTop: "12px", fontWeight: 500, fontSize: "19px", color: "#333" }}>
                        {message.includes('Thank You!') ? (
                            <>
                                <strong style={{ margin: 0, fontSize: "19px", fontWeight: "bold" }}>Thank You!</strong>
                                <br />
                                <span style={{ margin: 0, fontSize: "16px", fontWeight: "normal" }}>
                                    {message.replace(/^Thank You!\s*/i, "").trim()} 
                                </span>
                            </>
                        ) : (
                            <span style={{ color: "#696868", fontSize: "18px", fontWeight: 500 }}>{message}</span>
                        )}
                    </p>
                </div>
            )}
        </div>
    );
};

export default PopupForm;
