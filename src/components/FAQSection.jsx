import React, { useState } from 'react';

const FAQ_DATA = [
  {
    question: 'What is a laundry problem?',
    answer: `A laundry problem refers to any issue that makes washing, drying, or maintaining clothes
    difficult. This could include stains that won't come out, fabric damage, color bleeding, shrinkage, or simply
    not having enough time to do laundry. Laundry Mart solves these problems with professional equipment,
    expert knowledge, and convenient service.`,
  },
  {
    question: 'Why is Laundry Mart the best laundry and dry cleaner?',
    answer: `Laundry Mart stands out because of our commitment to quality, convenience, and customer
    satisfaction. We use eco-friendly cleaning products, employ trained professionals, offer doorstep pickup and
    delivery, maintain transparent pricing, and provide specialized care for different fabric types. Our
    technology-enabled service makes scheduling and tracking your orders effortless.`,
  },
  {
    question: 'What are the hygiene precautions that Laundry Mart takes?',
    answer: `We maintain strict hygiene standards throughout our process. This includes regularly sanitizing
    equipment, washing clothes at appropriate temperatures to kill germs, segregating clothes to prevent
    cross-contamination, using high-quality detergents, ensuring staff follow hygiene protocols, and
    delivering clothes in sealed packaging to maintain cleanliness.`,
  },
  {
    question: 'Do I need to sort my clothes before sending them?',
    answer: `While basic sorting is helpful (separating laundry from dry cleaning items), our professional
    team will handle the detailed sorting process. We categorize your clothes based on color, fabric type, and
    cleaning requirements to ensure optimal results. You can simply place your items in the provided bag, and
    we'll take care of the rest.`,
  },
  {
    question: 'How long will it take to clean my clothes?',
    answer: `Our standard turnaround time is 24-48 hours from pickup to delivery. The exact timing depends on
    the service selected, quantity of items, and specific requirements. Express services are available
    for urgent needs. You can track your order status through our mobile app or website for real-time updates.`,
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Learn More About Laundry Mart</h2>
        <p className="section-subtitle">
          Hassle-Free Laundry & Dry Cleaning Services - Frequently Asked Questions
        </p>

        <div className="accordion">
          {FAQ_DATA.map((faq, index) => (
            <div
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
            >
              <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                <h3>{faq.question}</h3>
                <span className="accordion-icon" />
              </div>
              <div className="accordion-content" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
