import "./App.css";
import { Routes, Route } from "react-router";
import {HomePage, Services, Features, Products, Testimonial, Faq} from "./Pages/index.jsx";



import react from "react";
function App() {
  return (
    <>
      
      <Routes>
         <Route path="/" index element={<HomePage />} />
         <Route path="/services" element={<Services />} />
         <Route path="/features" element={<Features />} />
         <Route path="/products" element={<Products/>} />
         <Route path="/testimonials" element={<Testimonial/>} />
         <Route path="/faq" element={<Faq/>} />


      </Routes>
    </>
  );
}

export default App;
