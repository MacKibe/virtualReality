import { Service } from "../types";

interface ServicesPageProps {
  services: Service[];
}

const ServicesPage: React.FC<ServicesPageProps> = ({ services }) => {
  return (
    <div className="py-8">
      <div className="w-[75%] mx-auto">
        <div>
          <h2 className="text-5xl text-[var(--primary)]">Our Services</h2>
          <p className="my-4">
            At Virtual Reality Marketing Agency, we specialize in cutting-edge
            digital marketing solutions designed to elevate your brand, increase
            engagement, and drive measurable results.
          </p>
        </div>
        <ol>
          {services.map((service: Service, index: number) => (
            <li
              id={service.page_link}
              key={index}
              className="flex flex-row-reverse justify-center items-center gap-[5%] my-8 p-[5%] bg-white shadow-xl"
            >
              <div>
                <img src={service.image_url} alt={service.service} />
              </div>
              <div>
                <h3 className="text-2xl text-[var(--primary)] my-4">
                  {service.service}
                </h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ServicesPage;
