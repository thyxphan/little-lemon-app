import React, { useState } from "react";

function BookingForm({ availableTimes = [], onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    onSubmit({ date, time, guests, occasion });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const isFormValid = () => {
    return (
      date !== "" &&
      time !== "" &&
      guests >= 1 &&
      guests <= 20 &&
      occasion !== ""
    );
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        min={new Date().toISOString().split("T")[0]}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
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

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="20"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />
      {guests < 1 && <p className="error">Must be at least 1 guest.</p>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" disabled={!isFormValid()}>
        Reserve Table
      </button>
    </form>
  );
}

export default BookingForm;

