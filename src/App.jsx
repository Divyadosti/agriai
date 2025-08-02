import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import ContactForm from "./pages/ContactForm";
import CropPrediction from "./pages/CropPrediction"; 
import Fertilizer from "./pages/Fertilizer";// ✅ Import this
import DiseasePredict from "./pages/DiseasePredict";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service/:serviceId" element={<ServiceDetails />} />
                <Route path="/contacts" element={<ContactForm />} />
                <Route path="/cropprediction" element={<CropPrediction />} /> {/* ✅ Add this */}
                <Route path="/fertilizer" element={<Fertilizer />} />
                <Route path="/cropdisease" element={<DiseasePredict/>} />
            </Routes>
        </Router>
    );
};

export default App;
