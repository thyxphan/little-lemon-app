function ConfirmedBooking() {
  return (
    <section
      className="confirmed-booking"
      style={{
        textAlign: "center",
        padding: "3rem 1rem",
        backgroundColor: "#fef9f4",
        color: "#495E57",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Your Booking is Confirmed! 🍋
      </h2>
      <p style={{ fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
        Thank you for reserving a table at Little Lemon Chicago. We can't wait to 
        serve you our fresh Mediterranean dishes. See you soon!
      </p>
      <img
        src="https://via.placeholder.com/400x250.png?text=Little+Lemon+Table"
        alt="Little Lemon reservation"
        style={{ borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
      />
    </section>
  );
}

export default ConfirmedBooking;
