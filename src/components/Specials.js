import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import dish5 from "../assets/dish5.png";
import dish6 from "../assets/dish6.png";

const specials = [
  { image: dish1, name: "Horiatiki" },
  { image: dish2, name: "Souvlaki platter" },
  { image: dish3, name: "Mezze platter" },
  { image: dish4, name: "Roasted cauliflower" },
  { image: dish5, name: "Falafel balls" },
  { image: dish6, name: "Pistachio Pesto Pasta" }
];

function Specials() {
  return (
    <section className="specials" aria-label="Weekly Specials">
      <h2>Our Weekly Specials</h2>

      <div className="special-cards">
        {specials.map(({ image, name }) => (
          <article className="special-card" key={name}>
            <figure>
              <img src={image} alt={name} className="special-image" />
              <figcaption>{name}</figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;

