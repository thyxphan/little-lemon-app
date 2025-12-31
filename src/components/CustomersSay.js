function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-cards">
        <div className="testimonial">
          <div className="stars">★★★★★</div>
          <p>"Amazing food and great service!"</p>
          <p className="customer-name">– Jane Doe</p>
        </div>

        <div className="testimonial">
          <div className="stars">★★★★★</div>
          <p>"A must-visit in Chicago!"</p>
          <p className="customer-name">– John Smith</p>
        </div>

        <div className="testimonial">
          <div className="stars">★★★★☆</div>
          <p>"Authentic Mediterranean flavors and cozy atmosphere."</p>
          <p className="customer-name">– Maria Lopez</p>
        </div>

        <div className="testimonial">
          <div className="stars">★★★★★</div>
          <p>"Fresh ingredients and friendly staff every time."</p>
          <p className="customer-name">– Alex Nguyen</p>
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;