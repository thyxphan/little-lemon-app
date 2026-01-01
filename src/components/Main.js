import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import BookingPage from "./BookingPage";

/* -----------------------------
   Reducer + Initializer
------------------------------ */

// Creates initial available times
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

// Handles updating times based on selected date
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return the same times regardless of date
      return ["17:00", "18:00", "19:00", "20:00", "21:00"];
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

        {/* Booking Page */}
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
