function ConfirmedBooking() {
  return (
    <main
      className="confirmed-booking"
      role="region"
      aria-labelledby="confirmed-heading"
      style={{
        textAlign: "center",
        padding: "3rem 1rem",
        backgroundColor: "#fef9f4",
        color: "#495E57",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
      }}
    >
      <h2
        id="confirmed-heading"
        style={{ fontSize: "2rem", marginBottom: "1rem" }}
      >
        Your Booking is Confirmed! <span role="img" aria-label="lemon">🍋</span>
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          maxWidth: "500px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >
        Thank you for reserving a table at Little Lemon Chicago. We can't wait to 
        serve you our fresh Mediterranean dishes. See you soon!
      </p>

      <figure style={{ margin: 0 }}>
        <img
          src="https://via.placeholder.com/400x250.png?text=Little+Lemon+Table"
          alt="Reserved table at Little Lemon restaurant"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <figcaption className="sr-only">
          Illustration of a reserved table at Little Lemon
        </figcaption>
      </figure>
    </main>
  );
}

export default ConfirmedBooking;
