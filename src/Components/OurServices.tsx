// src/Components/OurServices.tsx
import { Service } from "../types"; // Import the Service type

interface OurServicesProps {
  services: Service[];
}

const OurServices = ({ services }: OurServicesProps) => {
  return (
    <div id="services">
      <div className="px-[10%]">
        <h2 className="text-5xl text-[var(--primary)]">Our Services</h2>
        <p className="my-4">
          At Virtual Reality Circle, we don’t just market your business—we
          position it for success.
        </p>
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-[5%] text-[var(--primary)]">
          {services.map((service: Service, index: number) => (
            <li
              key={index}
              className="border md:w-[calc(30%)] text-center my-2 bg-[var(--text)]"
            >
              <a href={`/services#${service.page_link}`}>
                <img src={service.image_url} alt={service.service} />
                <div className="flex items-center text-center text-[var(--primary)]">
                  <p className="p-[5%]">{service.service}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurServices;