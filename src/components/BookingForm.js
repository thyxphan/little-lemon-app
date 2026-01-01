import React, { useState } from "react";

function BookingForm({ availableTimes = [], onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const isFormValid = () =>
    date !== "" &&
    time !== "" &&
    guests >= 1 &&
    guests <= 20 &&
    occasion !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    onSubmit({ date, time, guests, occasion });
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Table reservation form"
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
    >
      {/* Date */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
        required
        aria-invalid={date === ""}
      />

      {/* Time */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-invalid={time === ""}
      >
        <option value="" disabled>
          Select a time
        </option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      {/* Guests */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="20"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
        aria-invalid={guests < 1 || guests > 20}
        aria-describedby="guests-error"
      />
      {(guests < 1 || guests > 20) && (
        <p id="guests-error" className="error">
          Must be between 1 and 20 guests.
        </p>
      )}

      {/* Occasion */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isFormValid()}
        aria-label="On Click"
      >
        Reserve Table
      </button>
    </form>
  );
}

export default BookingForm;


