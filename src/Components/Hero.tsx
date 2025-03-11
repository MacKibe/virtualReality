import marketing from "../assets/marketing.png";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly h-[90dvh] items-center text-center md:text-right md:justify-center md:text-2xl px-[5%]">
      <div className="md:w-[50%] my-[5%]">
        <h3>Welcome To Virtual Reality Marketing Agency</h3>
        <h1 className="text-5xl md:text-7xl text-[var(--primary)]">
          Transform Your Reality
        </h1>
        <h3>
          We create immersive virtual experience that push the boundaries of
          what's possible.
        </h3>
        <div className="mt-[10%] text-center md:text-right">
          <a href="#services" className="px-[5%] py-[3%] bg-[var(--primary)] text-lg text-[var(--text)] border-2 rounded-4xl">
            Get Started
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center w-[70%] md:w-[50%]">
        <img className="md:w-[70%]" src={marketing} alt="Marketing" />
      </div>
    </div>
  );
};

export default Hero;
