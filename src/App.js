import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main'; // <-- your routes
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Main />   {/* This renders your Routes */}
      <Footer />
    </Router>
  );
}

export default App;
