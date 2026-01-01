function CustomersSay() {
  const testimonials = [
    { stars: 5, text: "Amazing food and great service!", name: "Jane Doe" },
    { stars: 5, text: "A must-visit in Chicago!", name: "John Smith" },
    { stars: 4, text: "Authentic Mediterranean flavors and cozy atmosphere.", name: "Maria Lopez" },
    { stars: 5, text: "Fresh ingredients and friendly staff every time.", name: "Alex Nguyen" }
  ];

  return (
    <section className="testimonials" aria-label="Customer testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-cards">
        {testimonials.map(({ stars, text, name }, index) => (
          <article className="testimonial" key={index}>
            <div
              className="stars"
              aria-label={`${stars} out of 5 stars`}
            >
              {"★".repeat(stars) + "☆".repeat(5 - stars)}
            </div>
            <blockquote>{text}</blockquote>
            <p className="customer-name">– {name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
