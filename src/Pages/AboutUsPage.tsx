const AboutUsPage = ({ coreValues }) => {
  return (
    <div className="py-8">
      <div className="flex flex-col w-[75%] mx-auto justify-evenly h-[70dvh] gap-[5%]">
        <div className="flex justify-between">
          <h3 className="flex items-center text-2xl">Mission</h3>
          <p className="w-[70%] text-4xl text-[var(--primary)]">
            To redefine digital marketing by merging innovative VR technology
            with proven marketing strategies, delivering measurable results and
            creating memorable client experiences.
          </p>
        </div>
        <hr className="text-[var(--primary)] border-2" />
        <div className="flex justify-between">
          <h3 className="flex items-center text-2xl">Vision</h3>
          <p className="w-[70%] text-4xl text-[var(--primary)]">
            To become the premier digital marketing agency recognized for its
            immersive VR solutions and comprehensive service offerings, driving
            business growth for our clients worldwide.
          </p>
        </div>
      </div>
      <div className="p-16 w-[75%] mx-auto bg-white">
        <h2 className="text-[var(--primary)] text-xl underline">About Us</h2>
        <p className="my-4 text-3xl">
          <b className="text-[var(--primary)]">Virtual Reality Marketing Agency</b> is
          a pioneering digital marketing agency that integrates immersive
          Virtual Reality (VR) experiences with traditional marketing methods.
          Our unique approach is designed to provide{" "}
          <b className="text-[var(--primary)]">engaging</b>,{" "}
          <b className="text-[var(--primary)]">interactive content</b> that stands out
          in competitive industries such as{" "}
          <b className="text-[var(--primary)]">real estate</b>,{" "}
          <b className="text-[var(--primary)]">agriculture</b>,
          <b className="text-[var(--primary)]">fashion</b>, and{" "}
          <b className="text-[var(--primary)]">professional services</b>.
        </p>
      </div>
      <div className="p-4 w-[75%] mx-auto">
        <h3 className="text-4xl mb-6">Core Values</h3>
        <ul className="flex flex-wrap justify-evenly">
          {coreValues.map((coreValue, index) => (
            <li
              key={index}
              className="w-[40%] border rounded-4xl p-12 bg-white mb-[5%]"
            >
              <h4 className="text-3xl py-2 text-[var(--primary)]">
                {coreValue.value}
              </h4>
              <p className="text-xl py-2">{coreValue.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
