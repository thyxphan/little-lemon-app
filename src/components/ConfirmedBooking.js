import rsvpImage from "../assets/rsvp.png";

function ConfirmedBooking() {
  return (
    <main
      className="confirmed-booking"
      role="region"
      aria-labelledby="confirmed-heading"
    >
      <h2 id="confirmed-heading">
        Your Booking is Confirmed!
      </h2>

      <p>
        Thank you for reserving a table at Little Lemon Chicago. We can't wait to
        serve you our fresh Mediterranean dishes. See you soon!
        <span role="img" aria-label="lemon emoji">🍋</span>
      </p>

      <figure>
        <img
          src={rsvpImage}
          alt="Reserved table at Little Lemon restaurant"
          className="table-image"
        />
      </figure>
    </main>
  );
}

export default ConfirmedBooking;

