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
    <div>
      <Hero />
      <OurServices services={services} />
      <h2 className="text-center my-[5%] p-[5%] text-[var(--primary)] bg-[var(--background)]">
        We Don’t Just Boost Traffic—We Drive Success
      </h2>
      <TheTeam profiles={profiles} />
      <div className="flex flex-col md:flex-row px-[5%] md:px-[10%] py-[10%] md:py-[2%] items-center text-center text-wrap text-[var(--primary)] bg-[var(--background)]">
        <h2>
          Schedule an online consultation or training package.
        </h2>
        <a
          href="#services"
          className="w-[60%] md:w-[20%] mx-auto my-8 py-4 border-2 rounded-4xl bg-[var(--primary)] text-[var(--text)]"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Homepage;
