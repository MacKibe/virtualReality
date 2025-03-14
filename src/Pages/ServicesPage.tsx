import { Service } from "../types";

interface ServicesPageProps {
  services: Service[];
}

const ServicesPage: React.FC<ServicesPageProps> = ({ services }) => {
  return (
    <div className="py-8">
      <div className="w-[75%] mx-auto">
        <div>
          <h2>Our Services</h2>
          <p>
            At Virtual Reality Marketing Agency, we specialize in cutting-edge
            digital marketing solutions designed to elevate your brand, increase
            engagement, and drive measurable results. Whether you’re looking to
            boost your online presence, generate high-quality leads, or enhance
            customer retention, our expert team is here to craft tailored
            strategies that align with your business goals.
          </p>
          <p>
            We blend creativity with data-driven insights to deliver campaigns
            that truly make an impact. From SEO and social media marketing to
            content creation and paid advertising, we leverage the latest
            industry trends and technology to maximize your ROI.
          </p>
        </div>
        <ol>
          {services.map((service: Service, index: number) => (
            <li
              id={service.page_link}
              key={index}
              className="flex flex-row-reverse justify-center items-center gap-[5%] my-8 p-[5%] bg-white shadow-xl"
            >
              <div className="flex-1">
                <img src={service.image_url} alt={service.service} />
              </div>
              <div className="flex-1">
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
