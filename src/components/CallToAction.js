import heroImage from "../assets/callToAction.png";

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to Little Lemon</h1>

        <p>
          Little Lemon Chicago brings the best Mediterranean flavors to the heart
          of the city. Founded in 2020, we pride ourselves on using fresh
          ingredients and traditional recipes. Our menu blends classic favorites
          with modern twists to satisfy every palate. Whether you’re stopping by
          for a quick bite or a leisurely meal, we promise a true taste of the
          Mediterranean.
        </p>

        <button>Reserve a Table</button>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Little Lemon restaurant view" />
      </div>
    </section>
  );
}

export default CallToAction;