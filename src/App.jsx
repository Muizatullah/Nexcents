import "./App.css";
import { Routes, Route } from "react-router";
import {HomePage, Services, Features, Products, Testimonial, Faq, Login, SignUp, Dashboard, DashboardLayout, Reports, Library , People, Activities, GetStarted, Settings} from "./Pages/index.jsx";



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
         <Route path="/login" element={<Login/>} />
         <Route path="/sign-up" element={<SignUp/>} />
          <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
           <Route path="reports" element={<Reports />} />
           <Route path="library" element={<Library />} />
           <Route path="people" element={<People />} />
           <Route path="activities" element={<Activities />} />
           <Route path="getstarted" element={<GetStarted />} />
           <Route path="settings" element={<Settings/>} />



            </Route>



      </Routes>
    </>
  );
}

export default App;
