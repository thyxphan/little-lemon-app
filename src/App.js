import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import CallToAction from './components/CallToAction';
import Specials from './components/Specials';
import Chicago from './components/Chicago';
import CustomersSay from './components/CustomersSay';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Nav />

      <Routes>
        {/* Homepage: renders all sections */}
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

        {/* Example of separate routes if needed */}
        <Route path="/specials" element={<Specials />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/testimonials" element={<CustomersSay />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
