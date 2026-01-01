import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../api";

import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

/* -----------------------------
   Reducer + Initializer
------------------------------ */

// Initializes available times for today
export const initializeTimes = () => fetchAPI(new Date());

// Updates available times when a new date is selected
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  // Handles submitting the booking form
  const submitForm = (formData) => {
    const result = submitAPI(formData);
    if (result) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <CallToAction />
              <Specials />
              <Chicago />
              <CustomersSay />
            </>
          }
        />

        {/* Individual pages */}
        <Route path="/specials" element={<Specials />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/testimonials" element={<CustomersSay />} />

        {/* Booking page */}
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />

        {/* Booking confirmation page */}
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
