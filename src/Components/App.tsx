import AboutUsPage from "../Pages/AboutUsPage";
import ContactPage from "../Pages/ContactPage";
import Homepage from "../Pages/Homepage";
import { Routes, Route } from "react-router";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import ServicesPage from "../Pages/ServicesPage";


const App: React.FC = () => {
  
  return (
    <div className=" font-serif bg-[#F0F0F0] text-[#181818]">
      {/* Header */}
      <Header />
      {/* Navbar */}
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
