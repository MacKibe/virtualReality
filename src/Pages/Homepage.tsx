import Hero from "../Components/Hero";
import OurServices from "../Components/OurServices";
import TheTeam from "../Components/TheTeam";
const Homepage = ({ services, profiles }) => {
  return (
    <div className="text-xl text-[#181818]">
      {/* Hero */}
      <Hero />

      {/* Our Services */}
      <OurServices services={services} />

      {/* Why Choose Us */}
      <div className="flex justify-center text-[#F0F0F0] ">
        <p className="text-6xl w-[70%] text-center py-[7%] font-serif text-[#A100F2]">
          We Don’t Just Boost Traffic—We Drive Success
        </p>
      </div>

      {/* Our Team */}
      <TheTeam profiles={profiles} />

      {/* Contact Us / Call to Action */}
      <div className="flex justify-evenly py-12 bg-[#F0F0F0] bg-blend-ligten bg-[url('./assets/laptop.jpg')] bg-cover bg-center text-[#F0F0F0] text-xl">
        <div>
          <p>Looking for an experienced digital consultant?</p>
          <p>Schedule an online consulation or training package.</p>
        </div>
        <button className="px-8 border-2 rounded-2xl bg-[#A100F2] text-xm">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Homepage;
