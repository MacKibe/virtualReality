interface CoreValue {
  id: number;
  value: string;
  description: string;
}

interface AboutUsPageProps {
  coreValues: CoreValue[];
}

const AboutUsPage = ({ coreValues }: AboutUsPageProps) => {
  return (
    <div className="py-8">
      <div className="flex flex-col px-[15%] md:px-[25%] py-[5%] justify-evenly gap-[5%]">
        <div className="flex justify-between">
          <h3 className="flex items-center text-2xl">Mission</h3>
          <p className="w-[70%] text-[var(--primary)]">
            To redefine digital marketing by merging innovative VR technology
            with proven marketing strategies.
          </p>
        </div>
        <hr className="text-[var(--primary)] border-2 my-[5%]" />
        <div className="flex justify-between">
          <h3 className="flex items-center text-2xl">Vision</h3>
          <p className="w-[70%] text-[var(--primary)]">
            To become the premier digital marketing agency recognized for its
            immersive VR solutions.
          </p>
        </div>
      </div>
      <div className="p-8 w-[75%] mx-auto bg-white">
        <h2 className="text-[var(--primary)] text-3xl underline">About Us</h2>
        <p className="my-4">
          <b className="text-[var(--primary)]">Virtual Reality Marketing Agency</b> is
          a pioneering digital marketing agency.
        </p>
      </div>
      <div className="py-4 px-[15%] mx-auto">
        <h3 className="text-3xl mb-6 text-[var(--primary)]">Core Values</h3>
        <ul className="flex flex-col md:flex-row flex-wrap justify-evenly">
          {coreValues.map((coreValue, index) => (
            <li
              key={index}
              className="md:w-[40%] border rounded-4xl p-12 bg-white mb-[5%]"
            >
              <h4 className="py-2 text-2xl text-[var(--primary)]">
                {coreValue.value}
              </h4>
              <p className="py-2">{coreValue.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;