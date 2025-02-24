const OurServices = ({ services }) => {
  console.log("Our Services Data Ourservices Component:", services);

  return (
    <div id="services" className="py-8 bg-white">
      <div className="w-[75%] m-auto py-8">
        <h2 className="text-5xl text-[#00ADB5]">Our Services</h2>
        <p className="my-4">
          At Virtual Reality Circle, we don’t just market your business—we
          position it for success. Our team of digital marketing experts
          combines strategy, creativity, and data-driven insights to help you
          attract, engage, and convert your ideal customers. Whether you need
          SEO that ranks, ads that convert, or content that captivates, we’re
          here to drive real results.
        </p>
        <p className="my-4">
          Explore our services and let’s take your business to the next level!
        </p>
        <ul className="flex flex-wrap gap-[5%] text-[#00ADB5]">
          {services.map((service, index) => (
            <li
              key={index}
              className="border w-[calc(30%)] text-center my-2 bg-[#F0F0F0]"
            >
              <a href={`/services#${service.page_link}`}>
                <img src={service.image_url} alt={service.service} />
                <span className="flex items-center text-[#00ADB5]">
                  <p className="py-[5%] w-[80%] mx-auto text-wrap">
                    {service.service}
                  </p>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurServices;
