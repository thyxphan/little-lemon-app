import restaurantImage from "../assets/restaurant.jpg";

function Chicago() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>About Little Lemon Chicago</h2>
        <p>
          Little Lemon Chicago brings the best Mediterranean flavors to the heart
          of the city. Founded in 2020, we pride ourselves on using fresh
          ingredients and traditional recipes.
        </p>
      </div>

      <img
        src={restaurantImage}
        alt="Interior of Little Lemon Chicago restaurant"
      />
    </section>
  );
}

export default Chicago;