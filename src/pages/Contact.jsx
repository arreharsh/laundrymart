import React from 'react'

function Contact() {
  return (

    <>
      <title>Contact Us - Laundry Mart</title>
      <meta name="description" content="Get in touch with Laundry Mart for all your laundry and dry cleaning needs. Contact us via phone, email, or visit our Faridabad location. We are here to help you with quality laundry services." />

      <section className="contact-section">
        <div className="container">
          <h1>Contact Us</h1>

          <div className="contact-wrapper">

            <div className="contact-form">
              <form id="contactForm">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="tel" name="phone" placeholder="Mobile Number" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
                <button type="submit" class="btn">Send Message</button>
              </form>
            </div>


            <div className="contact-inf">
              <h3>Our Address</h3>
              <p>H-599, Nangla Road, Jawahar Colony<br /> Faridabad, Haryana - 121005</p>

              <h3>Phone</h3>
              <p><a href="tel:+91-8287778324">+91 70651 96288</a></p>

              <h3>Email</h3>
              <p><a href="mailto:arreharsh@gmail.com">arreharsh@gmail.com</a></p>
            </div>
          </div>
        </div>



      </section>

    </>

  )
}

export default Contact