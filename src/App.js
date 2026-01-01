import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Nav />

      {/* Semantic main landmark */}
      <main id="main-content">
        <Main />
      </main>

      <Footer />
    </Router>
  );
}

export default App;
