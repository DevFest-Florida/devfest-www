import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import ScrollToTop from "./components/scrolltotop.js";
import Policy from "./pages/code-conduct-policy.js";
import FAQ from "./pages/faq.js";
import Home from "./pages/home.js";
import Location from "./pages/location.js";
import Schedule from "./pages/schedule.js";
import Speakers from "./pages/speakers.js";
import Sponsors from "./pages/sponsors.js";
import Volunteer from "./pages/volunteer.js";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/location" element={<Location />} />
          <Route path="/code-of-conduct" element={<Policy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
