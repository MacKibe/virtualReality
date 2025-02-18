const AboutUsPage = () => {
  return (
    <div className=" py-8">
      <div className="flex flex-col w-[75%] mx-auto justify-evenly h-[60dvh] gap-[5%]">
        <div className="flex justify-between">
          <h3 className="flex items-center text-2xl">Mission</h3>
          <p className="w-[70%] text-4xl text-[#A100F2]">
            To redefine digital marketing by merging innovative VR technology
            with proven marketing strategies, delivering measurable results and
            creating memorable client experiences.
          </p>
        </div>
        <hr className="text-[#A100F2] border-2"/>
        <div className="flex justify-between">
          <h3 className="flex items-center text-2xl">Vision</h3>
          <p className="w-[70%] text-4xl text-[#A100F2]">
            To become the premier digital marketing agency recognized for its
            immersive VR solutions and comprehensive service offerings, driving
            business growth for our clients worldwide.
          </p>
        </div>
      </div>
      <div className="p-16 w-[75%] mx-auto ">
        <h2 className="text-[#A100F2] text-xl underline">About Us</h2>
        <p className="my-4 text-3xl"><b className="text-[#00ADB5]">Virtual Reality Marketing Agency</b> is
          a pioneering digital marketing agency that integrates immersive
          Virtual Reality (VR) experiences with traditional marketing methods.
          Our unique approach is designed to provide <b className="text-[#00ADB5]">engaging</b>,{" "}
          <b className="text-[#00ADB5]">interactive content</b> that stands out
          in competitive industries such as <b className="text-[#00ADB5]">real estate</b>,{" "}
          <b className="text-[#00ADB5]">agriculture</b>,<b className="text-[#00ADB5]">fashion</b>, and <b className="text-[#00ADB5]">professional services</b>.
        </p>
      </div>
      <div className="w-[75%] mx-auto">
        <h3 className="text-4xl mb-6">Core Values</h3>
        <ul className="flex flex-wrap justify-evenly">
          <li className="w-[40%] border rounded-4xl p-12 bg-white mb-[5%]">
            <h4 className="text-3xl py-2 text-[#00ADB5]">Innovation</h4>
            <p className="text-xl py-2">
              Continuously explore new technologies to improve marketing
              effectiveness
            </p>
          </li>
          <li className="w-[40%] border rounded-4xl p-12 bg-white mb-[5%]">
            <h4 className="text-3xl py-2 text-[#00ADB5]">Integrity</h4>
            <p className="text-xl py-2">
            Maintain transparency and honesty in all client and internal communications
            </p>
          </li>
          <li className="w-[40%] border rounded-4xl p-12 bg-white mb-[5%]">
            <h4 className="text-3xl py-2 text-[#00ADB5]">Excellence</h4>
            <p className="text-xl py-2">
            Commit to the highest quality in every project
            </p>
          </li>
          <li className="w-[40%] border rounded-4xl p-12 bg-white mb-[5%]">
            <h4 className="text-3xl py-2 text-[#00ADB5]">Collaboration</h4>
            <p className="text-xl py-2">
            Foster teamwork and open communication across all departments
            </p>
          </li>
          <li className="w-[40%] border rounded-4xl p-12 bg-white mb-[5%]">
            <h4 className="text-3xl py-2 text-[#00ADB5]">Client Focus</h4>
            <p className="text-xl py-2">
            Prioritize client success and satisfaction in every initiative
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
