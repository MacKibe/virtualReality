import AboutUsPage from "../Pages/AboutUsPage";
import ContactPage from "../Pages/ContactPage";
import Homepage from "../Pages/Homepage";
import { Routes, Route } from "react-router";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import ServicesPage from "../Pages/ServicesPage";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("./data/data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const App = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });
  console.log("My data:", data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;
  //
  // Services Data
  const services = data?.[2]?.services;
  //
  // ProfileData
  const profiles = data?.[4]?.profiles;
  //
  // CoreValuesData
  const coreValues = data?.[3]?.corevalues;
  // Color Data
  // const color = data?.[1]?.pages;
  return (
    <div className="text-xm font-serif bg-[#F0F0F0] text-[#181818]">
      {/* Header */}
      <Header />
      {/* Navbar */}
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Homepage profiles={profiles} services={services} />}
        />
        <Route
          path="/about-us"
          element={<AboutUsPage coreValues={coreValues} />}
        />
        <Route
          path="/services"
          element={<ServicesPage services={services} />}
        />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
