import { Service } from "../types";

interface OurServicesProps {
  services: Service[];
}
const OurServices: React.FC<OurServicesProps> = ({ services }) => {
  return (
    <div id="services">
      <div className="div-p">
        <h2>Our Services</h2>
        <p>
          At Virtual Reality Circle, we don’t just market your business—we
          position it for success. Our team of digital marketing experts
          combines strategy, creativity, and data-driven insights to help you
          attract, engage, and convert your ideal customers. Whether you need
          SEO that ranks, ads that convert, or content that captivates, we’re
          here to drive real results.
        </p>
        <p>
          Explore our services and let’s take your business to the next level!
        </p>
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-[5%] text-[var(--primary)]">
          {services.map((service, index) => (
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
