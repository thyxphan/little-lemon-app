import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, submitForm }) {
  return (
    <section
      className="booking-page"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem",
        backgroundColor: "#fef9f4",
        minHeight: "80vh",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          color: "#495E57",
          textAlign: "center",
        }}
      >
        Reserve a Table 🍋
      </h1>
      <p
        style={{
          maxWidth: "600px",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#495E57",
          fontSize: "1.1rem",
        }}
      >
        Choose your preferred date, time, and let us know if you're celebrating a
        special occasion. We look forward to serving you the freshest
        Mediterranean dishes in Chicago!
      </p>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          minWidth: "300px",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <BookingForm
          availableTimes={availableTimes}
          onSubmit={submitForm} // ✅ pass submitForm as onSubmit
        />
      </div>
    </section>
  );
}

export default BookingPage;
