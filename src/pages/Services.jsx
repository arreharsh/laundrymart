import React from 'react'


function Services() {
  return (

    <section className="services">
      <div className="container">
        <h1>Our Services</h1>

        <section className="service" id="laundry">
          <h2>Laundry Services</h2>
          <p>
            Our professional laundry service is designed to make your life easier. We handle your daily laundry with the utmost care and precision, ensuring your clothes are returned clean, fresh, and neatly folded. From casual wear to bedsheets and towels, every item is washed using safe and fabric-appropriate detergents. We separate colors from whites, treat stains before washing, and use high-quality machines to deliver consistently clean results.
          </p>
          <img src="./Assets/laundry.jpg" className="service-img" alt="" />
          <p>
            Whether you’re a student, a busy professional, or a family with loads of laundry every week, our service helps you reclaim your time while we take care of the dirty work. We also offer flexible pickup and delivery slots so your schedule stays uninterrupted.
          </p>
        </section>

        <section className="service" id="drycleaning">
          <h2>Dry Cleaning</h2>
          <p>
            When it comes to garments that require special care — suits, sarees, blazers, gowns, or delicate fabrics like silk and wool — our dry cleaning service is the perfect solution. We use advanced cleaning techniques and eco-friendly solvents that remove dirt and stains without damaging the fabric.
          </p>
          <img src="/Assets/drycleaning.png" className="service-img" alt="" />
          <p>
            Each item is inspected, pre-treated, cleaned, steam-pressed, and packaged with professional care. With our expertise, your clothes retain their shape, texture, and color — making them look as good as new every time you wear them.
          </p>
        </section>

        <section className="service" id="ironing">
          <h2>Ironing</h2>
          <p>
            Wrinkles are a thing of the past with our premium ironing service. Whether it’s a formal shirt, a traditional kurta, or a pair of trousers, we press every item perfectly using professional-grade steam irons. Our team ensures that pleats, collars, and cuffs are sharp and garment structure is preserved.
          </p>
          <img src="/Assets/ironing.jpg" className="service-img" alt="" />
          <p>
            Ironed clothes are carefully folded or hung (as per your preference) and packaged neatly for delivery. You’ll always be ready to dress sharp for any occasion, without ever needing to touch an iron.
          </p>
        </section>

        <section className="service" id="rafu">
          <h2>Rafu (Darning)</h2>
          <p>
            Don’t discard your favorite clothes because of a small tear or hole. Our traditional <em>rafu</em> service, also known as darning, breathes new life into damaged garments. Our skilled artisans manually restore the fabric, blending threads seamlessly to match the original design and weave.
          </p>
          <img src="/Assets/darning.jpg" className="service-img" alt="" />
          <p>
            Whether it’s a woolen sweater with a tiny hole or a kurta with a worn-out patch, our rafu work preserves the integrity of your clothing while saving you money and reducing waste. It’s an age-old skill that we proudly offer with modern-day precision.
          </p>
        </section>
      </div>


    </section>


  )
}

export default Services