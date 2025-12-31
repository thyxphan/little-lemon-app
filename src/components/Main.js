import { Routes, Route } from "react-router-dom";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";

function Main() {
  return (
    <main>
      <Routes>
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
        <Route path="/specials" element={<Specials />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/testimonials" element={<CustomersSay />} />
      </Routes>
    </main>
  );
}

export default Main;
