import { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  // Handles input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation submitted:", formData);
    alert(`Reservation submitted!\n${JSON.stringify(formData, null, 2)}`);
    // Reset form if needed
    setFormData({
      date: "",
      time: "",
      guests: 1,
      occasion: "Birthday",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Time:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Number of Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          required
        />
      </label>

      <label>
        Occasion:
        <select name="occasion" value={formData.occasion} onChange={handleChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>

      <button type="submit">Reserve Table</button>
    </form>
  );
}

export default BookingForm;

