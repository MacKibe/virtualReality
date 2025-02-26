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
      <div className="text-7xl text-center my-[5%] p-[5%] text-[var(--primary)] bg-[var(--background)]">
        <p className="">We Don’t Just Boost Traffic—We Drive Success</p>
      </div>

      {/* Our Team */}
      <TheTeam profiles={profiles} />

      {/* Contact Us / Call to Action */}
      <div className="my-[5%] px-[10%] md:px-[25%] py-[3%] text-center text-wrap text-[var(--primary)] bg-[var(--background)]">
        <p>
          Looking for an experienced digital consultant? Schedule an online
          consulation or training package.
        </p>
        <button
          href="#services"
          className="px-8 py-2 mt-4 border-2 rounded-4xl bg-[var(--primary)] text-[var(--text)]"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Homepage;
