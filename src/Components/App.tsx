import { useQuery } from "@tanstack/react-query";
import Header from "./Header";
import Nav from "./Nav";
import { Route, Routes } from "react-router";
import Homepage from "../Pages/Homepage";
import AboutUsPage from "../Pages/AboutUsPage";
import ServicesPage from "../Pages/ServicesPage";
import ContactPage from "../Pages/ContactPage";
import Footer from "./Footer";

// Define types for your data
interface Service {
  id: number;
  service: string;
  description: string;
  image_url: string;
  page_link: string;
}

interface Profile {
  id: number;
  name: string;
  role: string;
  image_url: string;
}

interface CoreValue {
  id: number;
  value: string;
  description: string;
}

interface Data {
  services: Service[];
  profiles: Profile[];
  corevalues: CoreValue[];
}

const fetchData = async (): Promise<Data[]> => {
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  const services = data?.[1]?.services || [];
  const profiles = data?.[3]?.profiles || [];
  const coreValues = data?.[2]?.corevalues || [];

  return (
    <div className="font-serif text-[var(--background)] bg-[var(--text)]">
      <Header />
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
      <Footer />
    </div>
  );
};

export default App;