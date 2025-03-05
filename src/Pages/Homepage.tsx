// src/Pages/Homepage.tsx
import Hero from "../Components/Hero";
import OurServices from "../Components/OurServices";
import TheTeam from "../Components/TheTeam";
import { Service, Profile } from "../types";

interface HomepageProps {
  services: Service[];
  profiles: Profile[];
}

const Homepage: React.FC<HomepageProps> = ({ services, profiles }) => {
  return (
    <div className="text-2xl">
      <Hero />
      <OurServices services={services} />
      <div className="text-7xl text-center my-[5%] p-[5%] text-[var(--primary)] bg-[var(--background)]">
        <p>We Don’t Just Boost Traffic—We Drive Success</p>
      </div>
      <TheTeam profiles={profiles} />
      <div className="my-[5%] px-[10%] md:px-[25%] py-[3%] text-center text-wrap text-[var(--primary)] bg-[var(--background)]">
        <p>
          Looking for an experienced digital consultant? Schedule an online
          consultation or training package.
        </p>
        <a
          href="#services"
          className="px-8 py-2 mt-8 border-2 rounded-4xl bg-[var(--primary)] text-[var(--text)]"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Homepage;