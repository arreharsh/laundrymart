import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://laundrymart.onrender.com/api/contact', formData);
      if (res.data.success) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        alert('Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Try again later.');
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <h1>Contact Us</h1>

          <div className="contact-wrapper">
            <div className="contact-form">
              <form id="contactForm" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                <textarea name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>

            <div className="contact-inf">
              <h3>Our Address</h3>
              <p>H-599, Nangla Road, Jawahar Colony<br /> Faridabad, Haryana - 121005</p>

              <h3>Phone</h3>
              <p><a href="tel:+91-7065196288">+91 70651 96288</a></p>

              <h3>Email</h3>
              <p><a href="mailto:arreharsh@gmail.com">support@laundrymart.co.in</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

