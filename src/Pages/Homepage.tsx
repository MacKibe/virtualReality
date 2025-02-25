import Hero from "../Components/Hero";
import OurServices from "../Components/OurServices";
import TheTeam from "../Components/TheTeam";
const Homepage = ({ services, profiles }) => {
  return (
    <div className="text-2xl">
      {/* Hero */}
      <Hero />

      {/* Our Services */}
      <OurServices services={services} />

      {/* Why Choose Us */}
      <div className="">
        <p className="">
          We Don’t Just Boost Traffic—We Drive Success
        </p>
      </div>

      {/* Our Team */}
      <TheTeam profiles={profiles} />

      {/* Contact Us / Call to Action */}
      <div className="">
        <div>
          <p>Looking for an experienced digital consultant?</p>
          <p>Schedule an online consulation or training package.</p>
        </div>
        <button className="">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Homepage;
