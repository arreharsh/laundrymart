import React, { useState, useRef } from 'react';
import axios from 'axios';

const CallbackPopup = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target.id === "callbackOverlay") {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const phone = formData.get('phone');

    try {
      const res = await axios.post('https://laundrymart.onrender.com/api/contact', {
        name,
        phone,
        email: "",        
        message: ""       
      });

      if (res.data.success) {
        alert("Thank you! We’ll get back to you.");
        formRef.current.reset();
        onClose();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div id="callbackOverlay" className={`popup-overlay ${isOpen ? "show" : ""}`} onClick={handleOverlayClick}>
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Request a Call Back</h2>
        <form id="callbackForm" ref={formRef} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="tel" name="phone" placeholder="Mobile Number" required />
          <button type="submit" className="submit-btn">Get Me Back</button>
        </form>

        {loading && (
          <div id="loader" style={{
            display: "flex", position: "fixed", top: 0, left: 0, width: "100%",
            height: "100%", background: "rgba(255, 255, 255, 0.85)", zIndex: 9999,
            justifyContent: "center", alignItems: "center", flexDirection: "column"
          }}>
            <div className="spinner"></div>
            <p style={{ marginTop: 12, fontSize: 18, fontWeight: 500, color: "#333" }}>Submitting...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallbackPopup;

