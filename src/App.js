import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <HashRouter>
      <div className="site">
        {/*Site header */}
        <Header />

        <Routes>
          {/*Home page */}
          <Route path="/" element={<Home />} />

          {/*About page */}
          <Route path="/about" element={<About />} />

          {/*Portfolio page */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/*Site Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
