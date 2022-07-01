import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

// Static
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Interactive
import Landing from "./components/Landing";
import ContactUs from "./components/ContactUs";

//Niño mapa
//https://images.unsplash.com/photo-1489702932289-406b7782113c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80

//Niño mochila
//https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />

          <Route path="/contact" element={<ContactUs />} />

          <Route path="/jobs" element={<ContactUs />} />

          <Route path="/projects" element={<ContactUs />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <Toaster />
    </React.Fragment>
  );
}

export default App;
